import { T9Tree } from './lib/T9Tree/T9Tree'

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
	
	  const dico = [
    "abc",
    "aba",
    "abe",
    "cat",
    "cot",
    "caterpilar",
    "def"
  ]
  const t = new T9Tree(dico)

  res.send(t.query('222'));
});

app.listen(port, () => {
  

  
  console.log(`Listening on port ${port}`)
  



});