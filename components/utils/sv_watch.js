const livereload = require("livereload");
const path = require("path");

const server = livereload.createServer();

// Correcting the paths
const publicDir = path.join(__dirname, "../../public");
const svNodeFile = path.join(__dirname, "../sv_node.js");

server.watch([publicDir, svNodeFile]);

console.log(`Livereload server watching ${publicDir} and ${svNodeFile}`);
