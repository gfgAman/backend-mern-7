const express = require('express');
const app = express();

// Application-level middleware
const middleware = (req,res,next)=>{
    console.log('inside middleware');
    next()

}

//Application based middleware
app.use(middleware)

// router based middleware
app.get('/check', (req, res) => {
  res.send('Hello, world!');
});
app.get('/create',(req,res)=>{
    res.send('this is create route')
})

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});