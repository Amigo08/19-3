const mongoose = require("mongoose");

const URL = "mongodb+srv://amigozz6128:123@cluster0.lsi8grv.mongodb.net/Moviebooking?retryWrites=true&w=majority";

mongoose
  .connect(URL)
  .then(() => {
    console.log(`DB CONNECTED`);
  })
  .catch((error) => {
    console.log(error);
  });
