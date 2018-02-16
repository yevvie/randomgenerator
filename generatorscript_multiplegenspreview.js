
function nameofgenerator(){
			//define word banks to pull from; remember that capital letters will stay capitalized, so if you're making syllables, you'll need to keep lowercase in wordlist2 and higher. if you want it to have a chance to skip the chosen wordbank, add empty variable ""
			var wordlist1 = ["FirstWord01","FirstWord02","FirstWord03"];
			var wordlist2 = ["SecondWord01","SecondWord02","SecondWord03"];
			//for more change numbers as needed: var wordlist3 = ["SecondWord01","SecondWord02","SecondWord03"];
			//call random number from list through math.random(), auto-specify length of the list with .length
			var randomNumber1 = parseInt(Math.random() * wordlist1.length);
			var randomNumber2 = parseInt(Math.random() * wordlist2.length);
			//for more change numbers as needed: var randomNumber3 = parseInt(Math.random() * wordlist3.length); 
			//specify what result (name) will look like; if you want space between the words you'll have to add a variable with space (+ " " +_)
			//var name = wordlist1[randomNumber1] + " " + wordlist2[randomNumber2];
			var name = wordlist1[randomNumber1] + wordlist2[randomNumber2];
			//get result in "generated"
			if(document.getElementById("result")){
				document.getElementById("generated").removeChild(document.getElementById("result"));
			}
			//create a div to show result in as a child of the other div we specified css for
			var element = document.createElement("div");
			element.setAttribute("id", "result");
			element.appendChild(document.createTextNode(name));
			document.getElementById("generated").appendChild(element);
			
}

function othergenerator(){
			var wordlist1 = ["aaFirstWord01","aaFirstWord02","aaFirstWord03"];
			var wordlist2 = ["bbSecondWord01","bbSecondWord02","bbSecondWord03"];
			var randomNumber1 = parseInt(Math.random() * wordlist1.length);
			var randomNumber2 = parseInt(Math.random() * wordlist2.length);
			var name = wordlist1[randomNumber1] + wordlist2[randomNumber2];
			if(document.getElementById("result")){
				document.getElementById("generated").removeChild(document.getElementById("result"));
			}
			var element = document.createElement("div");
			element.setAttribute("id", "result");
			element.appendChild(document.createTextNode(name));
			document.getElementById("generated").appendChild(element);
			
}
