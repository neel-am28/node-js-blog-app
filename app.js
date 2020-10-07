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
  }
);

app.use("/foods", foodRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
