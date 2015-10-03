$(document).ready(function(){
  getRandomColor();
});

$("#newQuote").on("click", function(){
  getRandomQuote();
  getRandomColor();
});

$("#tweetLink").on("click", function(){
  encodeURL();
});

var getRandomQuote = function(){
  var randomNumber = Math.floor(Math.random() * (quotes.length - 0) + 0);
  var quote = quotes[randomNumber];
  $("#quote").text(quote.quote);
  $("#author").text(quote.author);
};

var getRandomColor = function(){
  var randomNumber = Math.floor(Math.random() * (colors.length - 0) + 0);
  var color = colors[randomNumber];
  $("body").css("background-color",color );
};

var encodeURL = function(){
  var text = $("#quote").text();
  var encoded = encodeURIComponent(text);
  $("#tweetLink").attr("href", "https://twitter.com/intent/tweet?text=" + encoded);
};


var quotes = [
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    quote: "Winners never quit and quitters never win.",
    author: "Vince Lombardi"
  },
  {
    quote: "It’s fine to celebrate success but it is more important to heed the lessons of failure.",
    author: "Bill Gates"
  },
  {
    quote: "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.",
    author: "Warren Buffet"
  },
  {
    quote: "One of the huge mistakes people make is that they try to force an interest on themselves. You don’t choose your passions; your passions choose you.",
    author: "Jeff Bezos"
  },
  {
    quote: "I have not failed. I’ve just found 10,000 ways that won’t work.",
    author: "Thomas Edison"
  },
  {
    quote: "Logic will get you from A to B. Imagination will take you everywhere..",
    author: "Albert Einstein"
  },
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill"
  },
  {
    quote: "Genius is 1% inspiration, and 99% perspiration.",
    author: "Thomas Edison"
  },

  {
    quote: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill"
  },

  {
    quote: "I don’t know the key to success, but the key to failure is trying to please everybody.",
    author: "Bill Cosby"
  },

  {
    quote: "Success is not what you have, but who you are.",
    author: "Bo Bennet"
  }

];

var colors = ["#9c27b0", //purple
              "#e91e63", //pink
              "#f44336", //red
              "#2196f3", //blue
              "#00bfa5", //teal
              "#ff9800", //orange
              "#3f51b5", //indigo
              "#00bcd4", //cyan
              "#cddc39", //lime
              "#ffc107", //amber
              "#ffeb3b", //yellow
              "#795548", //brown
              "#9e9e9e", //grey
              "#607d8b" //blue grey
             ];
