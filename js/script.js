// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array of JS objects for the individual quotes and the various pieces of information
// Array of quotes to display

var quotes = [
  {
    quote: "What I say is, a town isn’t a town without a bookstore. It may call itself a town, but unless it’s got a bookstore, it knows it’s not foolin’ a soul.",
    source: "Neil Gaiman",
    citation: "American Gods",
    year: 2001,
    tags: "books, life, reading, community",
    link: "https://www.goodreads.com/quotes/53787-what-i-say-is-a-town-isn-t-a-town-without"
  },
  {
    quote: "I want to stand as close to the edge as I can without going over. Out on the edge you see all kinds of things you can't see from the center.",
    source: "Kurt Vonnegut",
    citation: "Player Piano",
    year: 1952,
    tags: "life, inspiration, daring",
    link: "https://www.goodreads.com/quotes/12428-i-want-to-stand-as-close-to-the-edge-as"
  },
  {
    quote: "We're a government that believes in everybody having the illusion of free will.",
    source: "Anthony Burgess",
    citation: "The Wanting Seed",
    year: 1952,
    tags: "government, citizens, illusion",
    link: "https://www.goodreads.com/quotes/230767-we-re-a-government-that-believes-in-everybody-having-the-illusion"
  },
  {
    quote: "If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway. It's easy to tell when a question is coming from a good place. Then listen some more. Sometimes people just want to feel heard. Here's to possibilities of friendship and connection and understanding.",
    source: "Chimamanda Ngozi Adichie",
    citation: "Americanah",
    year: 2013,
    tags: "questions, learning, community",
    link: "https://www.goodreads.com/quotes/919029-if-you-don-t-understand-ask-questions-if-you-re-uncomfortable-about"
  },
  {
    quote: "This was love: a string of coincidences that gathered significance and became miracles.",
    source: "Chimamanda Ngozi Adichie",
    citation: "Half of a Yellow Sun",
    year: 2006,
    tags: "love",
    link: "https://www.goodreads.com/quotes/297205-this-was-love-a-string-of-coincidences-that-gathered-significance"
  },
  {
    quote: "It's like everyone tells a story about themselves inside their own head. Always. All the time. That story makes you what you are. We build ourselves out of that story.",
    source: "Patrick Rothfuss",
    citation: "The Name of the Wind",
    year: 2007,
    tags: "stories, life",
    link: "https://www.goodreads.com/quotes/20603-it-s-like-everyone-tells-a-story-about-themselves-inside-their"
  },
  {
    quote: "We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.",
    source: "Margaret Atwood",
    citation: "The Handmaid's Tale",
    year: 1985,
    tags: "invisibility, life, community",
    link: "https://www.goodreads.com/quotes/176687-we-were-the-people-who-were-not-in-the-papers"
  },
  {
    quote: "People who deny the existence of dragons are often eaten by dragons. From within.",
    source: "Ursula Le Guin",
    citation: "The Wave in the Mind: Talks & Essays on the Writer, the Reader & the Imagination",
    year: 2004,
    tags: "imagination, life, writing, creativity",
    link: "https://www.goodreads.com/quotes/96119-people-who-deny-the-existence-of-dragons-are-often-eaten"
  },
  {
    quote: "The books that the world calls immoral are books that show the world its own shame.",
    source: "Oscar Wilde",
    citation: "The Picture of Dorian Gray",
    year: 1890,
    tags: "books, life, reading, morality",
    link: "https://www.goodreads.com/quotes/5299-the-books-that-the-world-calls-immoral-are-books-that"
  },
  {
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    source: "Alan Turing",
    citation: "Computing machinery and intelligence",
    year: 1950,
    tags: "progress, work, vision",
    link: "https://en.wikiquote.org/wiki/Alan_Turing"
  }
];

// array to store quotes that have been shown
var shownQuo = [];

// create function named getRandomQuote() which will select a random quote from the above array
function getRandomQuote() {

  // random number generator for quotes
  var randInt = Math.floor(Math.random() * quotes.length);

// checks to see if there are quotes to be used still - if not, resets
if (quotes.length === 0) {
    shownQuo[10] = {
      quote: "No motive is pure. No one is good or bad-but a hearty mix of both. And sometimes life actually gives to you by taking away.",
      source: "Carrie Fisher",
      citation: "Wishful Drinking",
      year: 2008,
      tags: "Humor, Life, Good and Evil",
      link: "https://www.goodreads.com/quotes/448220-no-motive-is-pure-no-one-is-good-or-bad-but"
      };
    quotes = shownQuo;
    shownQuo = [];
  }

// receives random quote and logs it in the console
  var selQuote = quotes[randInt];
  quotes.splice(randInt, 1);
  shownQuo.push(selQuote);
  return selQuote;
}

// print the selected quote to the screen
function printQuote() {
  var randQuo = getRandomQuote();
  console.log(randQuo);
  var output = "";

//output quote and source
  output += '<p class ="quote">' + randQuo.quote  + '</p>';
  output += '<p class ="source">' + randQuo.source + '</p>';

  //output citation, year, and tags if they are included
  if(typeof randQuo.citation != 'undefined'){
    output += '<span class="citation"><a href=' + randQuo.link + '>' + randQuo.citation + '</a>';
  }
  if(typeof randQuo.year != 'undefined'){
    output += '</span>'+ '<span class="year">' + randQuo.year + '</span>';
  }
  if(typeof randQuo.tags != 'undefined'){
    output += '<p><span class="tags">' + randQuo.tags + '</span></p>';
  }
  document.getElementById('quote-box').innerHTML = output;
  }

  function randomBackground() {
      var hash = '#';
      var color = ['0000FF','5F9EA0','DC143C','008B8B','8B0000','483D8B','228B22','FF69B4','4B0082', 'ADD8E6', '191970'];
      hash += color[Math.floor(Math.random() * color.length)];
      document.getElementById('background').style.background = hash;
  }

  document.getElementById('loadQuote').addEventListener("click",randomBackground, false);

  // Changes the quote and background after a certain amount of time passes
  var newQuote = window.setInterval(printQuote, 15000);
  var newBG = window.setInterval(randomBackground, 15000);