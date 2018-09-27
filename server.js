import { T9Tree } from './lib/T9Tree/T9Tree'

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/t9/:query?', (req, res) => {
	
	  const dictionnary = [
    "abc",
    "aba",
    "abe",
    "cat",
    "cot",
    "caterpilar",
    "def"
  ]
  const query = req.params.query || ''
  if (!query.length) {
    res.send('')
  } else {
    const tree = new T9Tree(dictionnary)
    res.send(tree.query(query));
  }
  
});

app.listen(port, () => {
  

  
  console.log(`Listening on port ${port}`)
  



});