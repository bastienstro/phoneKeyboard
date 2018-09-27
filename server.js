import { T9Tree } from './lib/T9Tree/T9Tree'

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const fs = require('fs')


app.get('/api/t9/:query?', (req, res) => {
	
	const dictionary = fs.readFileSync("lib/5000-words.txt", 'utf8').split('\n');  
  
  const query = req.params.query || ''
  if (!query.length) {
    res.send('')
  } else {
    const tree = new T9Tree(dictionary)
    res.send(JSON.stringify(tree.query(query)));
  }
  
})

app.listen(port, () => {
  

  
  console.log(`Listening on port ${port}`)
  



})