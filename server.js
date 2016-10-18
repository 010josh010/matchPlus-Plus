'use strict'; 

//Dependencies
const express= require('express'); 
const bodyParser = require('body-parser'); 
const path  =  require('path'); 
const cleverbot = require('cleverbot.io'); 
const fs = require('fs'); 



//express and port 
const app = express(); 
const PORT = 3000 ; 

//for bodyParser 
app.use(bodyParser.json()) ; 
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.text()); 
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 


//for cleverbot 

let bot = new cleverbot('ryEiUBhXYFtmbn2d','XeA6Aq3bwzO6EjR3z8A2A2N3TYsUecsP');

//set nick 
bot.setNick('test'); 

//initialize the session takes a single callback(err,session) 
bot.create((err, sssion) =>{

	if(err) console.error(err); 

	console.log('session established'); 
}); 
//query  .ask method takes a str , callback(err, res)

let botAsk = function(){

	bot.ask('how are you' , (err, res) =>{
		if(err) throw err; 

		let reply = res;   



		//logging to chat history  
		fs.appendFile('chatlog.txt' ,reply + '\n' , (err, res) =>{

			if(err) throw err; 

			console.log('chat log updated'); 
		})
	}); 

};  

		
setInterval(botAsk , 10000); 



// settimeout to change the query  


//data 
let profiles = [

	{
		name: 'test', 
		email: 'test@gmail.com', 
		phone: 'text', 
		uniqueId:'test'
	}, 

	{
		name: 'test2', 
		email: 'test@gmail.com', 
		phone: 'text', 
		uniqueId:'test', 
	}

]; 


// Routes 
//home 
app.get('/', (req, res) =>  {

    res.sendFile(path.join(__dirname + '/index.html'));

   
});

// waiting list 

app.get('/waitinglist', (req, res) =>  {

    res.sendFile(path.join(__dirname + '/waitinglist.html'));
});

//reservation 

app.get('/reservation', (req, res) =>  {

    res.sendFile(path.join(__dirname + '/reservation.html'));
});

//routes
app.get('/api/:profiles?',  (req, res) =>  {

	//req.params returns a new object with the property
	var newProfiles = req.params.profiles; 

	console.log(newProfiles) ; 

	res.json(profiles); 

	console.log(profiles[profiles.length-1]); 

});


// ROUTES 
app.post('/api/add/profile', (req, res) =>  {

	let newprofiles  = req.body; 
	
	profiles.push(newprofiles); 

	console.log(profiles); 


});


app.listen(PORT, () => console.log('listening on PORT', PORT ));  