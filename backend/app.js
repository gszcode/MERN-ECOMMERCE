const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

// Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
app.use("/api/v1", product);
app.use("/api/v1", user);

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
