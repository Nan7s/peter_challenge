const express = require("express");
const cors = require("cors");
const { serve, setup } = require("./swagger.js");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

// Middleware
app.use(express.json());

// Configuración de cors
const corsOptions = {
  origin: "https://estoes-challenge.up.railway.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

// Swagger
app.use("/api-docs", serve, setup);

// Routes
app.use("/projects", projectRoutes);

module.exports = app;
