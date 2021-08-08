import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("/ is working");
});

app.get("/home", function (req, res) {
  res.json({
    name: "bill",
    age: 89,
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("running server!");
});
