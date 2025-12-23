import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generateRoute from "./routes/generate.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/generate", generateRoute);

app.get("/", (req, res) => {
  res.send("FollowUpCloser Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));
              
