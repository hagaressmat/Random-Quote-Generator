var quateBody = document.getElementById("quateBody");

var quoteAuthor = document.getElementById("quoteAuthor");

var qoutes = [
  { body: "Be yourself; everyone else is already taken.", name: "Oscar Wilde" },
  {
    body: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    name: "Marilyn Monroe",
  },
  { body: "So many books, so little time.", name: "Frank Zappa" },
  {
    body: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    name: "Albert Einstein",
  },
  {
    body: "A room without books is like a body without a soul.",
    name: "Marcus Tullius Cicero",
  },
  {
    body: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    name: "Bernard M. Baruch",
  },
  {
    body: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    name: "William W. Purkey",
  },
  {
    body: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    name: "Dr. Seuss",
  },
  {
    body: "You only live once, but if you do it right, once is enough.",
    name: "Mae West",
  },
  {
    body: "Be the change that you wish to see in the world.",
    name: "Mahatma Gandhi",
  },
  {
    body: "In three words I can sum up everything I've learned about life: it goes on.",
    name: "Robert Frost",
  },
  {
    body: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    name: "J.K. Rowling",
  },
  {
    body: "Don’t walk in front of me… I may not follow \nDon’t walk behind me… I may not lead \nWalk beside me… just be my friend",
    name: "Albert Camus",
  },
  {
    body: "If you tell the truth, you don't have to remember anything.",
    name: "Mark Twain",
  },
  {
    body: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    name: "Maya Angelou",
  },
  {
    body: "To live is the rarest thing in the world. Most people exist, that is all.",
    name: "Oscar Wilde",
  },
  {
    body: "A friend is someone who knows all about you and still loves you.",
    name: "Elbert Hubbard",
  },
  {
    body: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that",
    name: "Martin Luther King Jr.",
  },
  { body: "We accept the love we think we deserve.", name: "Stephen Chbosky" },
  {
    body: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    name: "Ralph Waldo Emerson",
  },
];

var index = -1;

function randomQuote() {
  var random = Math.floor(Math.random() * 20);
  if (index !== random) {
    quateBody.innerHTML = `"${qoutes[random].body}"`;
    quoteAuthor.innerHTML = `--${qoutes[random].name}`;
  } else {
    randomQuote();
  }
}
