var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, { useMongoClient: true });

let db = mongoose.connection;
// Check connection
db.once('open', function(){
    console.log('Now Connected to MongoDB');
  });
  
  // Check for DB errors
  db.on('error', function(err){
    console.log(err);
  });