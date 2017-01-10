// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Quotes to be randomly generated

var quotes = [
  {
    quote: "What I say is, a town isn’t a town without a bookstore. It may call itself a town, but unless it’s got a bookstore, it knows it’s not foolin’ a soul.",
    source: "Neil Gaiman",
    citation: "American Gods",
    year: 2001
  },
  {
    quote: "I want to stand as close to the edge as I can without going over. Out on the edge you see all kinds of things you can't see from the center.",
    source: "Kurt Vonnegut",
    citation: "Player Piano",
    year: 1952
  },
  {
    quote: "We're a government that believes in everybody having the illusion of free will.",
    source: "Anthony Burgess",
    citation: "The Wanting Seed",
    year: 1952
  },
  {
    quote: "If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway. It's easy to tell when a question is coming from a good place. Then listen some more. Sometimes people just want to feel heard. Here's to possibilities of friendship and connection and understanding.",
    source: "Chimamanda Ngozi Adichie",
    citation: "Americanah",
    year: 2013
  },
  {
    quote: "This was love: a string of coincidences that gathered significance and became miracles.",
    source: "Chimamanda Ngozi Adichie",
    citation: "Half of a Yellow Sun",
    year: 2006
  },
  {
    quote: "It's like everyone tells a story about themselves inside their own head. Always. All the time. That story makes you what you are. We build ourselves out of that story.",
    source: "Patrick Rothfuss",
    citation: "The Name of the Wind",
    year: 2007
  },
  {
    quote: "We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.",
    source: "Margaret Atwood",
    citation: "The Handmaid's Tale",
    year: 1985
  },
  {
    quote: "People who deny the existence of dragons are often eaten by dragons. From within.",
    source: "Ursula Le Guin",
    citation: "The Wave in the Mind: Talks & Essays on the Writer, the Reader & the Imagination",
    year: 2004
  },
  {
    quote: "The books that the world calls immoral are books that show the world its own shame.",
    source: "Oscar Wilde",
    citation: "The Picture of Dorian Gray",
    year: 1890
  },
  {
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    source: "Alan Turing",
    citation: "Computing machinery and intelligence",
    year: 1950
  }
];

// variable to store used quotes
var usedQuotes = [];

// Pulls a random quote to be displayed
function getRandomQuote () {

if (quotes.length === 0) {
	quotes = usedQuotes;
	usedQuotes = [];
}

	var randomNumber = Math.floor(Math.random() * quotes.length);
	var selectedQuote = quotes[randomNumber];

// Makes sure every quote is used once
	quotes.splice(randomNumber,1);
	usedQuotes.push(selectedQuote);
	console.log(selectedQuote);
  console.log(usedQuotes);

//returns selected quote
	return selectedQuote;
}




// Displays Availible Properties of the choosen quote

function printQuote () {
	var postedQuote = getRandomQuote ();
	var info =  "";

	  info += '<p class ="quote">' + postedQuote.quote  + '</p>';
	  info += '<p class ="source">' + postedQuote.source; '</p>';


      	//posts citation and year only if applicable

      	if (typeof postedQuote.citation != 'undefined'){
      	info += '<span class="citation">' + postedQuote.citation + '</span>';
 		 }
 		 if(typeof postedQuote.year != 'undefined'){
	  	info += '<span class ="year">' + postedQuote.year  + '</span>';
		 }

  		// Writes the final quote to the page
  		document.getElementById('quote-box').innerHTML = info;
}

// Change random background color of the page

function randomColor() {
    var hash = '#';
    var colors = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0','FF69B4'];
    hash += colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('bg').style.background = hash;
}

document.getElementById('loadQuote').addEventListener("click",randomColor, false);


// Changes the Quote and random color every thirty seconds
	var quoteChange = window.setInterval(printQuote, 30000);
	var colorChange = window.setInterval(randomColor, 30000);
