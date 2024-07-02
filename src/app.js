const express = require("express");
const cors = require("cors");
const { serve, setup } = require("./swagger.js");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Swagger
app.use("/api-docs", serve, setup);

// Routes
app.use("/projects", projectRoutes);

module.exports = app;
