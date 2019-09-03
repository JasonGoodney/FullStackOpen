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

app.get('/info', (req, res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(p => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
;
