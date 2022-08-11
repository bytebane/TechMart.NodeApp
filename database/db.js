const mongoose = require("mongoose");

const database = mongoose.connect(
  process.env.DATABASE_URL,
  {
    dbName: "techmart",
    tlsInsecure: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
    // reconnectTries: 3,
    // reconnectInterval: 500,
    connectTimeoutMS: 10000,
    // tls: true,
    // tlsCAFile: "./ca-certificate.crt"
  },
  (error) => {
    if (!error) {
      console.log("connected to the mongoDB - techmart");
    } else {
      console.log("connection to mongoDB failed \n" + error);
    }
  }
);

module.exports = database;
