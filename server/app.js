import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("api çalişiyor");
});

app.listen(5000, () => console.log("3000 portundan dinleniyor!"));
