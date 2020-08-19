const express = require('express');
const app = express();
const { projects} = require('./data.json')


const PORT = 3000;


app.set('view engine', 'pug');
app.use('/static', express.static('public'));


app.get('/', (req,res) => {
  res.render('index')
});

app.get('/about', (req,res) => {
  res.render('about')
});

app.get('/projects/:id', (req,res) => {
  const {id} = req.params;
  
});




app.listen(PORT, () => {
  console.log(`Find me at localhost:${PORT}`);
})