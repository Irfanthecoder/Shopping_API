const express = require("express");
const myntra = require("./routes");
const uuid = require("uuid").v4;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  req.headers["request_id"] = uuid();
  next();
});

app.use("/", myntra);

app.listen(3000, () => {
  console.log("Server Started");
});