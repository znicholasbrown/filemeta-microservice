(()=>{

'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


app.use(express.static('public'));



app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.post("/upload", upload.single('test'), (req, res) => {
  let response = { size: req.file.size };
  fs.unlink(req.file.path, ()=> {  }); //removes the file after the information has been caught

  res.send(response);
})

var listener = app.listen(process.env.PORT);



})();
