const mongoose = require("mongoose");

const connectDatabase = (URI) => {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) =>
      console.log(`MongoDB connected with server: ${data.connection.host}`)
    )
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
