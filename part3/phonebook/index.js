const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let persons = [
  {
    'name': 'chips ahoy',
    'number': '898349583',
    'id': 6
  },
  {
    'name': 'oreo',
    'number': '8953892358',
    'id': 7
  },
  {
    'name': 'thin mint',
    'number': '902359802',
    'id': 9
  }
];

app.get('/', (req, res) => {
  res.send('<h1>Phonebook</h1>');
});

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.post('/api/persons', (req, res) => {

});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
;
