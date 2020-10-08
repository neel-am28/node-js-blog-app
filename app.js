const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect(
  "mongodb+srv://neelam:neelam1234@node-practice.hirte.mongodb.net/food-api?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(3000, () => console.log("Server running on port 3000")))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect("/foods");
});

app.use("/foods", foodRouter);

