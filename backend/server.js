const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Contact = require('./model/Contact');
const db = require('./app');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/contact', (req, res) => {
  const { firstName, lastName, email, message, phoneNumber } = req.body;

  // Backend validation logic
  if (!firstName || !lastName || !email || !message || !phoneNumber) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  // Phone number validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({ error: 'Phone number must be 10 digits' });
  }

  // Save the form data to the database
  const contact = new Contact({
    firstName,
    lastName,
    email,
    message,
    phoneNumber,
  });

  contact.save()
    .then(() => res.json({ message: 'Form submitted successfully' }))
    .catch(err => {
      console.error('An error occurred:', err);
      res.status(500).json({ error: 'An error occurred while saving the form data' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});