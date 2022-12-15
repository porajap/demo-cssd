import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const PORT = 9999;
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to NodeJS RESFull API");
});

import itemRoute from "./routes/item.route.js";
app.use("/item", itemRoute);

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));

