const express = require("express");
const path = require("path");
const {
  handleInsert,
  handleUpdate,
  handleDelete,
  handleFetch,
} = require("../components/models/sv_crud.js");

const router = express.Router();

router.use(express.static(path.join(__dirname, "../public")));

module.exports = function (pageName, exportMysql) {
  pageName = pageName.replace("sv_", "").replace(".js", ".html");

  router.get("/test", (req, res) => {
    res.json({ message: "Server is connected to client!" });
  });

  router.post("/insert", (req, res) => {
    handleInsert(req, res, exportMysql);
  });

  router.patch("/update", (req, res) => {
    handleUpdate(req, res, exportMysql);
  });

  router.delete("/delete", (req, res) => {
    handleDelete(req, res, exportMysql);
  });

  router.post("/fetch", (req, res) => {
    handleFetch(req, res, exportMysql);
  });

  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, `../public/html/${pageName}`));
  });

  return router;
};
