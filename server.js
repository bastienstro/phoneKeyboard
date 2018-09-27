import { T9Tree } from './lib/T9Tree/T9Tree'

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/t9/:query?', (req, res) => {
	
	  const dictionary = [
    "abc",
    "abe",
    "aba",
    "aab",
    "aac",
    "aaa",
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
    const tree = new T9Tree(dictionary)
    res.send(JSON.stringify(tree.query(query)));
  }
  
});

app.listen(port, () => {
  

  
  console.log(`Listening on port ${port}`)
  



});