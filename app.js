// Define variables 
const text = document.getElementById('text');
const author = document.getElementById('author');
const button = document.getElementById('new-quote');

// Fetch Quote & Author
function getQuote() {
  fetch('http://api.icndb.com/jokes/random')
  .then(res => res.json())
  .then(data => {
    const joke = data.value.joke;
    const jokeID = String(data.value.id);
    console.log(author);

    text.innerHTML = joke;
    author.innerHTML = `Joke ID: ${jokeID}`;
  })
  .catch(err => {
    console.log(`Something went wrong! ${err}`);
  });
}

// Onload Fetch Inital Data
window.onload = getQuote;


// Fetch New Data



button.addEventListener('click', getQuote);