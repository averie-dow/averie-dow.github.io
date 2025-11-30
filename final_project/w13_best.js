const booksData = [
    {name: 'Beautiful World, Where Are You?', author: "Sally Rooney", image:"assets/beautiful_world.jpeg"},
    {name: "Conversations With Friends", author: "Sally Rooney", image:"assets/convos.jpeg"},
    {name: "Intermezzo", author: "Sally Rooney", image:"assets/intermezzo.jpg"},
    {name: "Normal People", author: "Sally Rooney", image:"assets/normal_people.jpg"},
    {name: "Tender Is The Flesh", author: "Augustina Bazterica", image:"assets/titf.jpeg"},
    {name: "Twilight", author: "Stephanie Meyer", image:"assets/twilight.jpg"}

];

function getRandomBook(book){
    document.querySelector('.title').innerHTML = book.name;
    document.querySelector('.author').innerHTML = book.author;
    document.querySelector('.image').src = book.image;

}

//SOURCE: https://www.w3schools.com/js/js_random.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
window.onload = function(){
    const randomBookNumber = Math.floor(Math.random()* booksData.length);
    const randomBook = booksData[randomBookNumber];
    getRandomBook(randomBook)
};