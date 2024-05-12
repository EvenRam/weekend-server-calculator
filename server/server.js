const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static('server/public'));

// Global variable that will contain all of the calculation objects:
let calculations = [
  {
    numOne: 3,
    numTwo: 5,
    operator: '+',
    result: 8
  },
  {
    numOne: 11,
    numTwo: 7,
    operator: '-',
    result: 4
  },
   {
    numOne: 10,
    numTwo: 7,
    operator: '*',
    result: 70
  },
  {
    numOne: 60,
    numTwo: 2,
    operator: '/',
    result: 30
  }]

// * GET Route to return calcualation objects-  path, Callback function (arrow function)
  // All routes on a server must respond with something! (A status code, or data)

app.get('/calculations', (req, res) => {

  
  // * Sending some data
  res.send(calculations)
  
})





//POST /calculations--- need a post for each operation 

app.post('/calculations', (req, res) => {

  

  console.log(" Going to add new calculations: ", req.body )

  calculations.push(req.body)
  console.log(" Incoming calculations...",calculations )
  
  // You always have to respond, even if its not data
  res.send(201)
})
























// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
