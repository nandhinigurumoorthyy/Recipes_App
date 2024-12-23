require("dotenv").config();

const RecipeController = require("./controller/Recipes.controller");
const { createDbConnection } = require("./recipe");

// create db connection
createDbConnection();

const express = require("express");
//console.log("express", express);

// Step1: Create a API server
const API_server = express();
//console.log("API_server", API_server);

// Serving static files
API_server.use(express.static("public"));

// Parsing incoming body as a json
API_server.use(express.json());

// Inject Routers
API_server.use("/recipes", RecipeController);

// Step2: Start and listen incoming request to this server
API_server.listen(process.env.PORT, process.env.HOSTNAME, function () {
  console.log("Server Started");
  console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`);
});
