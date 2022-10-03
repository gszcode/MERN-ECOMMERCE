const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./database");

// Config
dotenv.config({ path: "backend/config/config.env" });

// Connecting to database
const URI = process.env.MONGODB_URI;
connectDatabase(URI);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
