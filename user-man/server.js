// 2. Practical Backend Task (30 minutes):
// ● Task: Develop a REST API endpoint for managing user profiles.
// ● Scenario: Create an endpoint to allow creating and retrieving a user profile
// (Parameters can be user name, user email, timestamp, etc.).
// ● Requirements:
// ● Define the API route and method.
// ● Implement request and response handling.
// ● Include error handling and data validation.
// ● Bonus:
// ● Add update or delete functionality for the profile.

let users = [];
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello world');
});

// creating a user
app.post('/api/user/create', (req, res) => {
  if(users.findIndex(u => {
    if(u.email === req.body.email) return true 
    return false
  }) > -1) {
    res.send('Duplicate user')
  } else {
    users.push({
      username: req.body.username,
      email: req.body.email,
      timestamp: new Date().getTime()
    });
    res.send(users);
  }
});

// listing all the users
app.get('/api/user/list', (req, res) => {
  res.send(users);
});

// delete a user
app.delete('/api/user/delete/:email', (req, res) => {
  let returnValue = 'No user with that email';
  users = users.filter(({email}) => {
    if(email === req.params.email) {
      returnValue = `user with the email ${req.params.email} is deleted`
      return false;
    }
    return true
  })

  res.send(users)
});

// update a user by email
app.put('/api/user/update', (req, res) => {
  throw new Error('adsf')
  users = users.map(u => {
    if(u.email === req.body.email ) {
      return Object.assign(u, req.body);
    } else return u;
  });
  res.send(users)
});


app.use((error, req, res, next) => {
  res.status(400).send('Error is present')
})


app.listen(3333, () => {
  console.log('Server up')
})