const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/krusty-krab', { useNewUrlParser: true, useUnifiedTopology: true });

const recipeSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  salary: Number
});

const Recipe = mongoose.model('Recipe', recipeSchema);
const Employee = mongoose.model('Employee', employeeSchema);

const addData = async () => {
  await Recipe.insertMany([
    { name: "Krabby Patty", price: 3.99 },
    { name: "Double Krabby Patty", price: 5.49 },
    { name: "Kelp Shake", price: 2.99 },
    { name: "Seaweed Salad", price: 4.25 }
  ]);

  await Employee.insertMany([
    { name: "Valor", position: "Manager", salary: 3500 },
    { name: "SpongeBob", position: "Fry Cook", salary: 2500 },
    { name: "Squidward", position: "Cashier", salary: 2000 },
    { name: "Mr. Krabs", position: "Owner", salary: 10000 }
  ]);

  console.log('Data added successfully!');
  mongoose.connection.close();
};

addData();
