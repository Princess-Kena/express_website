const express =require('express');
const path =require('path');
const bodyParser = require('body-parser')
const server = express('server')

server.use(express.static(path.join(__dirname, 'public')));
 server.use(bodyParser.urlencoded({extended: false}))

 //const AllTypesOfRequestHandler =(req, res) =>{
   // console.log(req.body.email);
   // console.log(req.body.password);
    //res.send('Bravo')
    //server.use('/index', AllTypesOfRequestHandler)
    server.listen(5000, () =>console.log('server is ready'))
