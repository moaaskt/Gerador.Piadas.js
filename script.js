const jokeText = document.querySelector('.texto-piada');

const newJokeBt = document.querySelector('.new-joke-bt');

const tweetBt = document.querySelector('.tweet-bt');

newJokeBt.addEventListener('click', getJoke);

getJoke();

function getJoke() {

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'aplication/json'
        }
    }).then(function (response) {

        return response.json();
    }).then(function (data) {

        const joke = data.joke
        jokeText.innerText = joke;

        const tweetLink = `https://twitter.com/share?text=${joke} `;

        tweetBt.setAttribute('href', tweetLink);
    }).catch(function (error) {
        jokeText.innerText = 'ops!! Houve um erro =/'
        tweetBt.removeAttribute('href');

    });
}