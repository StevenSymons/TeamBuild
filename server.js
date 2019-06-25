const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const path = require("path");

const app = express();
const L_PORT = 5000;

app.use(logger(":date[iso]"));
app.use(logger("dev"));
app.use(logger(":user-agent"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
}
app.use(express.static(path.join(__dirname, "client/build")));

// Routes

app.use("/user", userRoutes);

app.get("/test", (req, res) => {
  res.send("You're using the API correctly. :)");
});

app.listen(process.env.PORT || L_PORT, () => {
  console.log(`Server is running on port ${L_PORT}`);
});
