let mongoose = require("mongoose");
let express = require("express");
let cors=  require('cors')
let app = express();
app.use(cors())

app.use(express.json());
let loginRoutes = require("./routes/login");
let productRoutes = require("./routes/product");
app.use(express.urlencoded({ extended: true }));
let userRoutes = require("./routes/user");


mongoose.connect("mongodb://127.0.0.1:27017/flipkart")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", userRoutes);
app.use("/api", loginRoutes);
app.use("/api", productRoutes);

//    localhost:4000/api/users

app.listen(4000, () => {
  console.log("server running on port 4000");
});