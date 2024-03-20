

const mongoose = require('mongoose');


  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb+srv://admin:1zoLtWfZGywrzzEi@cluster0.dzwv3p2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true
  })
      .then((data) => {
          console.log(`Database connected to ${data.connection.host}!!!`)
      })
      .catch((err) => {
      })
