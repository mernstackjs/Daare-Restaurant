import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;
const allowedOrigins = process.env.ALLOW_ORIGIN.split(",");

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Welcome to Daare Restaurant Server");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
