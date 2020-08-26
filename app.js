const express = require('express');
const app = express();
const { projects } = require('./data.json')


const port = process.env.PORT || 3000;


app.set('view engine', 'pug');
app.use('/static', express.static('public'));


app.get('/', (req,res) => {
  res.render('index', { projects })
});

app.get('/about', (req,res) => {
  res.render('about')
});

app.get('/projects/:id', (req,res, next) => {
  const {id} = req.params;
  //Check to see if the project id is valid. If invalid id, next() to  error 404
  if (id < projects.length) { 
    const project = projects[id];
    res.render('project', project);
  } else {
    next();
  }
});

//404 Not found middleware
app.use((req,res,next) => {
  const err = new Error('Not Found.  Uh ohh... The page you went looking for went up in smoke!');
  err.status = 404;
  console.log(`Someone tried to navigate to ${req.path} and received a ${err.status} error.`)
  next(err);
});

//Error handling middleware
app.use((err,req,res,next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});



app.listen(port, () => {
  console.log(`Find me at localhost:${port}`);
})