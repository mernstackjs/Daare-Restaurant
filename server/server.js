import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Daare Restaurant Server");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
