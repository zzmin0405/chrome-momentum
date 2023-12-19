const quotes = [
  {
    quote: "aa",
    author: "ss",
  },
  {
    quote: "a2a",
    author: "s2s",
  },
  {
    quote: "a3a",
    author: "s3s",
  },
  {
    quote: "a4a",
    author: "s4s",
  },
  {
    quote: "a5a",
    author: "s5s",
  },
  {
    quote: "a6a",
    author: "66s",
  },
  {
    quote: "a7a",
    author: "s8s",
  },
];
const quote = document.querySelector("#quote span:first-child"); // id= quote 안에있는 첫번째 span의 index
const author = document.querySelector("#quote span:last-child");

const randomquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomquote.quote;
author.innerText = randomquote.author;
