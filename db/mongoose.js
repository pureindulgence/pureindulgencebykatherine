const mongoose = require('mongoose')

const uri = "mongodb+srv://admin:admin@cluster0.8yiyz.mongodb.net/logins?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {     
  console.log("MongoDB connection successfull");
  
});