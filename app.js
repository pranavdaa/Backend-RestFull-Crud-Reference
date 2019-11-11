const express = require('express')
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config')
const postRoutes = require('./routes/posts')
//Middleware
// app.use('/',()=>{
//   console.log("hello othisi sthe magfiv of a middle ware")
// })
app.use(bodyParser.json());
app.use('/posts',postRoutes)

//Routes
app.get('/',(req,res)=>{
  res.send("got something")
});


mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},(err)=>{
  if(err){console.log(`err has occered${err}`)}
  else{
    console.log(`Mongodb connected sucessfully`)
  }
})

app.listen(3000);