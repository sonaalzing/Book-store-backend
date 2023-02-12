//8BCQW6kNWKEawaZG

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books
mongoose.set('strictQuery',false);

mongoose
  .connect(
    "mongodb+srv://Admin:8BCQW6kNWKEawaZG@cluster0.zu4mdcc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));