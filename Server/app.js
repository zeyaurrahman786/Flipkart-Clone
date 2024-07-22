let mongoose = require("mongoose");
let express = require("express");
let app = express();

app.use(express.json());
let loginRoutes = require("./routes/login");
app.use(express.urlencoded({ extended: true }));
let userRoutes = require("./routes/user");

mongoose
  .connect("mongodb://127.0.0.1:27017/flipkart")
  .then(() => {
    console.log("Database Coneected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", userRoutes);
app.use("/api", loginRoutes);

// localhost:5000/api/users

app.listen(5000, () => {
  console.log("Server running on port 5000");
});