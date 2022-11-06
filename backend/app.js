require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const router = require("./routes/users");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/v1", router);

connectDB();
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
