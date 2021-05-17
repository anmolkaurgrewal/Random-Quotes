/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote : "We are all born with a divine fire in us. Our efforts should be to give wings to this fire and fill the world with the glow of its goodness.",
    source : "A.P.J. Abdul Kalam",
    citation : "Wings of Fire",
    year : "1999",
  },
  {
    quote :"Earth provides enough to satisfy every man's needs, but not every man's greed.",
    source : "Mahatma Gandhi",
    citation : "The Story of My Experiments with Truth",
    year : "1927",
  },
  {
    quote : "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
    source : "Alexander Vassilieff",
    citation : "Odysseya: An Epic Journey from Russia to Australia",
    year : "2008",
  },
  {
    quote : "Just because someone stumbles and loses their path, doesn’t mean they’re lost forever.",
    source : "Professor X",
    citation : "X-Men days of future",
    year : "2015",
  },
  {
    quote : "It is not our abilities that show what we truly are… it is our choices.",
    source : "Dumbledore",
    citation : "Harry Potter and the Chamber of ServiceWorkerRegistration",
    year : "2002",
  }
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}

/***
 * `printQuote` function
 ***/
 function printQuote () {
  var quotes = getRandomQuote ();
  var quoteContainer = document.getElementById("quote-box");
  var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
      if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
      if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
      else {quoteString += '</p>'};
        quoteContainer.innerHTML = quoteString;

      document.body.style.backgroundColor = getRandomColor ();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);