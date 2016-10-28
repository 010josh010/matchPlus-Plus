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


//for serving front-end static content 
app.use(express.static(path.join(__dirname, 'public')));


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

let botAsk = function(query){

	bot.ask(query , (err, res) =>{
		if(err) throw err; 
		let reply = res;   
		//logging to chat history  
		fs.appendFile('chatlog.txt' ,reply + '\n' , (err, res) =>{
			if(err) throw err; 

			console.log('chat log updated'); 
		})
	}); 

};  


//data 
let profiles = [

	{	
		Id:'sythe14029', 
		name: 'Rory Mercury', 
		email: 'rory@gmail.com',  
		photo: 'http://i.imgur.com/EWGjr3g.png', 
		age: 961,
		password:null,
		gender:'Female',
		favAnime: 'Oreimo',
		favWeapon: 'Sythe' ,
		animePref:'FLCL', 
		dere:'Yandere',
		favDere:'Kuudere', 
		q1: 'Yes', 
		q2: 'Space Cowboy', 
		q3: 'Agree' 
		

	}, 

	{
		Id:'planc', 
		name: 'Mashiro Shiina', 
		email: 'test@gmail.com',  
		photo: 'http://1.bp.blogspot.com/-ss4DKjc7KoI/UJHZhj7rTwI/AAAAAAAAAgg/Opg3e7HZTxc/s1600/mashiro.jpg',  
		age: 18, 
		password:null,
		gender: 'Female',
		favAnime: 'Nyanboron', 
		favWeapon: 'Kitchen Knife',
		animePref:'Fushigi Yuugi', 
		dere:'Dandere',
		favDere:'Tsundere', 
		q1: 'bokutachi wa miokutta', 
		q2: 'Artist', 
		q3: 'Not sure' 
		
	} , 

	{
		Id: 'fayve', 
		name: 'Faye Valentine',
		email: 'fayefaye@gmail.com', 
		photo: 'http://vignette4.wikia.nocookie.net/cowboybebop/images/5/5b/Faye_tall.jpg/revision/latest?cb=20090726171254', 
		age: 27,
		password:null, 
		gender:'Female', 
		favAnime: 'Cowboy Beebop', 
		favWeapon: 'Glock 30',
		animePref:'Code Geass', 
		dere:'Kuudere',
		favDere:'Tsundere', 
		q1: 'Yes', 
		q2: 'Space Cowboy', 
		q3: 'Disagree' 
		

	}, 

	{
		Id: '+_Alucard_+' , 
		name: 'Alucard', 
		email: 'trueVampire@gmail.com', 
		photo : 'http://vignette2.wikia.nocookie.net/hellsing/images/1/1f/Alucardanddcasull.png/revision/latest?cb=20160520050746' , 
		age: '???',
		password:null, 
		gender: 'Male', 
		favAnime: 'Lucky Star', 
		favWeapon: '.454 Casull',
		animePref:'Clannad', 
		dere:'Kuudere',
		favDere:'Yandere', 
		q1: 'Huh?', 
		q2: 'Humanitarian', 
		q3: 'Strongly Agree' 
	},

	{
		Id: 'redogre189' , 
		name: 'Ram', 
		email: 'redOgre189@gmail.com',  
		photo : 'http://img1.ak.crunchyroll.com/i/spire2/ad7db34497123ea608565a03b2fc51081465381208_large.png' , 
		age: 18, 
		password:null,
		gender: 'Female', 
		favAnime: 'Madoka Magica', 
		favWeapon: 'Wind Magic',
		animePref:'Bleach', 
		dere:'Tsundere',
		favDere:'Tsundere', 
		q1: 'bokutachi wa miokutta', 
		q2: 'Warrior', 
		q3: 'Strongly Disagree' 
	},

	{
		Id: 'the_black_butler' , 
		name: 'Sebastian Michaelis', 
		email: 'theblackButler@gmail.com', 
		photo : 'http://stuffpoint.com/black-butler/image/345099-black-butler-sebastian.jpg' , 
		age: '???',
		password:null, 
		gender: 'Male', 
		favAnime: 'Akira', 
		favWeapon: 'Cutlery Kits', 
		animePref:'Bleach', 
		dere:'Kuudere',
		favDere:'Tsundere', 
		q1: 'Huh?', 
		q2: 'Artist', 
		q3: 'Agree'
	}, 

	{
		Id: 'airSoft4life' , 
		name: 'Umiko Ahagon', 
		email: 'umiko.ahagon@eaglejump.com', 
		photo : 'http://vignette2.wikia.nocookie.net/animevice/images/0/0a/Umiko_Ahagon_Stitched_Cap_(New_Game_Ep_12).jpg/revision/latest?cb=20160921055506' , 
		age: 27, 
		password:null,
		gender: 'Female', 
		favAnime: 'Sabugebu', 
		favWeapon: 'M4 Carbine',
		animePref:'FLCL', 
		dere:'Kuudere',
		favDere:'Dandere', 
		q1: 'bokutachi wa miokutta', 
		q2: 'Gamer', 
		q3: 'Not Sure' 
	},

	{
		Id: 'nightraid294' , 
		name: 'Akame', 
		email: 'murasame_akame@gmail.com', 
		photo : 'http://vignette3.wikia.nocookie.net/akamegakill/images/d/df/Akame_main.png/revision/latest/scale-to-width-down/270?cb=20140824211312' , 
		age: 19, 
		password:null,
		gender: 'Female', 
		favAnime: 'Bleach', 
		favWeapon: 'Murasame',
		animePref:'Fushigi Yuugi', 
		dere:'Dandere',
		favDere:'Kuudere', 
		q1: 'No', 
		q2: 'Warrior', 
		q3: 'Agree' 
	}, 

	{
		Id: 'oni_remu' , 
		name: 'Rem', 
		email: 'rem@gmail.com',  
		photo : 'http://i.imgur.com/9O9LRxr.jpg' , 
		age: 18, 
		password:null,
		gender: 'Female', 
		favAnime: 'Sword Art Online', 
		favWeapon: 'Morning Star',
		animePref:'Another', 
		dere:'Tsundere',
		favDere:'Kuudere', 
		q1: 'bokutachi wa miokutta', 
		q2: 'Alien', 
		q3: 'Not Sure'
	}


]; 


//home route , serves the index.html file 
app.get('/', (req, res) =>  {

    res.sendFile(path.join(__dirname + '/index.html'));
   
});


// serves the friends.html page 
app.get('/friends', (req, res) =>  {

    res.sendFile(path.join(__dirname + '/friends.html'));
});

//serves the signup page 
app.get('/signup', (req, res) =>  {

    res.sendFile(path.join(__dirname + '/signup.html'));
});

//api route for returning json to the client-end 
app.get('/api/:profile?/:offset?', (req, res) =>  {

	//gets the request from the url typed after /api/
	let profile = req.params.profile; 
	let offset = parseInt(req.params.offset); 

	//if the request is all the return json data for all profiles else return just the requested id
	switch(profile){
		case 'all': 
			res.json(profiles); 
			break ;
		case 'offset':
			if(isNaN(offset)){
				res.json(profiles); 
			}else{
				let sliced = profiles.slice(0 , offset); 
				res.json(sliced); 
			}
			break; 

		default: 
			//filter returns an array of objs data meeting the condition in the body
			let filtered = profiles.filter((p)=> p.Id === profile); 

			if(filtered[0]){
				res.json(filtered); 
			} else{
				res.json({err:'profile not found'}); 
			}
			
				
	}

});

// ROUTES 
app.post('/api/add/profile', (req, res) =>  {
	let newprofile  = req.body; 
	res.json(newProfile); 

});

app.post('/signup/new/' , (req, res) =>{
	let newProfile = req.body;

	console.log(newProfile); 

	let scores = []; 
	
	//matches profile properties and tallies matchpoints 
	for(let i = 0 ; i < profiles.length; i++){
		let  matchPoints =0 , profile = profiles[i]; 
		//scans through the profiles properties for matches
		for(let prop in profile){
			if(prop === 'age'|| 
				prop ==='favWeapon' || 
				prop ==='animePref' ||
				prop ==='q1'||
				prop ==='q2'||
				prop ==='q3'){
				if(newProfile[prop] === profile[prop]){
					matchPoints++;
				}
			}
		}

		//bonus points if you have the same favorite anime
		if(profile.favAnime === newProfile.favAnime){
			matchPoints +=2
		}

		//bonus points if they are the dere you are seeking 
		if(profile.dere === newProfile.favDere){
			matchPoints+=2; 
		}
		//adds the toal matchpoints to matches
		scores.push(matchPoints); 

	}


	console.log(scores);

	let max = Math.max(...scores); 
	console.log(max); 
	let maxIndex = scores.indexOf(max); 
	let bestMatch = profiles[maxIndex]; 

	//best match 
	console.log('Your best match is',bestMatch.Id,':', bestMatch.name); 

	let getFriends = function(a){
		let matches = []; 
		for(let i = 0 ; i < a.length; i++){
			if(a[i] <= max && a[i] >=3){
				matches.push({Id: profiles[i].Id}); 
			}
		}
		return matches; 
	}
	let friends = getFriends(scores); 
	newProfile.friends = friends; 


	profiles.unshift(newprofile); 
	res.redirect('/friends'); 

}); 



app.put('/api/change/profile' , (req, res) => {

    console.log(req.body); 

    let putData = req.body ; 

    profiles.filter((p)=> p.name === putData.name).map((p) => p.photo = putData.photo); 
}); 

//listener for the express application 
app.listen(PORT, () => console.log('listening on PORT', PORT ));  