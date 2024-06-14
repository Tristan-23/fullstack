require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const livereload = require("connect-livereload");

const app = express();
const colors = {
  bad: "\x1b[31m", // red
  good: "\x1b[32m", // green
  sender: "\x1b[36m", // cyan
  default: "\x1b[37m", // white
};

const allowedOrigins = [process.env.WEBSITE_URL];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.WEBSITE_PORT, () => {
  if (process.env.DEVELOPMENT_PRINT === "true") {
    console.log(
      colors.sender + `[${process.env.DEVELOPMENT_SENDER}]`,
      colors.good,
      `Website has started : ` + `\x1b[4m${process.env.WEBSITE_URL}\x1b[24m`,
      colors.default
    );
  }
});

if (process.env.DEVELOPMENT_PRINT === "true") {
  app.use(livereload());
}

process.on("SIGINT", () => {
  if (process.env.DEVELOPMENT_PRINT === "true") {
    console.log(
      colors.sender + `[${process.env.DEVELOPMENT_SENDER}]`,
      colors.bad,
      `Website has stopped : ` + `\x1b[9m${process.env.WEBSITE_URL}\x1b[29m`,
      colors.default
    );
  }
  process.exit();
});

const routesPath = path.join(__dirname, "..", "routes");
const databasePath = require("./models/sv_mysql.js");

fs.readdirSync(routesPath).forEach((file) => {
  const routePath = path.join(routesPath, file);
  const route = require(routePath);

  if (file.startsWith("sv_") && file.endsWith(".js")) {
    label = file.replace(/^sv_|\.js$/g, "");

    if (label !== "index") {
      label = label.split("-").join("/");
      app.use(`/${label}`, route(file, databasePath));
    } else {
      app.use(`/`, route(file, databasePath));
    }
  }
});
