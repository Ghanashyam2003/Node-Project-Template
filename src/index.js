const express = require("express");

const config = require("../config/config.json");

const apiRoutes = require("./routes");

const app = express();

app.use("/api", apiRoutes);

const ServerConfig = config["development"];
 // Get development config

 app.listen(ServerConfig.PORT || 3000, () => {
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT || 3000}`);
  });

