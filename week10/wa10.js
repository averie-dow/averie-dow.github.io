let triviaBtn = document.querySelector("#js-new-quote").
addEventListener("click",newTrivia);

let answerBtn = document.querySelector('#js-tweet').addEventListener('click',newAnswer);

let current = {
    text:"",
    book:"",
}


let count = 0;
let clickCount = document.querySelector(".clicks");

const endpoint= "https://bible-api.com/data/web/random";
const clickButton = document.querySelector("#js-new-quote");


const clicks = document.querySelector("clicks");
clickButton.addEventListener("click", function() {
        count++;
        clickCount.textContent = count;
    });



async function newTrivia() {
    //console.log("Success");


    try {
    const response = await fetch(endpoint);
    if (!response.ok){
        throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json);
        current.text = json['random_verse']['text'];
        current.book= json['random_verse']['book'];
        displayTrivia(current.text);
        console.log(current.text);
        console.log(current.book);

    }
    catch(err){
        console.log(err)
        alert('failed to get new trivia')
    }

}   

function displayTrivia(text){
    const questionText = document.querySelector("#js-quote-text");
    const answerText = document.querySelector('#js-answer-text');

    questionText.textContent = text;
    answerText.textContent = "";

}
function newAnswer(){
    console.log('Success == answer!');

    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = current.book
}
newTrivia();


