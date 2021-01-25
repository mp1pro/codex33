require("@babel/register");
const path = require('path');

const imPORT = require('./config/config');

const express = require('express');
const app = express();

//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../../public'))); 
app.use(express.static(path.join(__dirname, './public')));

app.use(require('./routes/index.jsx'));

const PORT = process.env.PORT || imPORT.PORT;

app.listen(PORT, function(){
	let test= 'testing';
	console.log(test + ' http://localhost:' + PORT)
})
