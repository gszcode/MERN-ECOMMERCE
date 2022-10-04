const express = require("express");
const errorMiddleware = require("./middlewares/error");
const app = express();

app.use(express.json());

// Route imports
const product = require("./routes/productRoute");
app.use("/api/v1", product);

// Middleware for errors
app.use(errorMiddleware);

// app.use((error, req, res, next) => {
//   console.error(error.message);

//   return res.status(404).json({
//     success: false,
//     message: error.message,
//   });
// });

module.exports = app;
