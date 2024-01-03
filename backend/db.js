const mongoose = require('mongoose');
async function connectToDatabase() {
    try {

      await mongoose.connect('mongodb+srv://gargsneh40:F4MNiaR5CchZLHVe@database1.zasmyy7.mongodb.net/fooditems?retryWrites=true&w=majority');

      console.log('Connected to database successfully');

      const collection =   await mongoose.connection.db.collection("delivery");
      const data = await collection.find({}).toArray();
      console.log('Fetched data:', data);
      }
        
            
        
        
      
     catch (err) {
      console.error('Error connecting to database:', err);
    }
}
  
  module.exports = {connectToDatabase};
  
