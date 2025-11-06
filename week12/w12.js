
const titleHeader = document.querySelector('.bookTitle1')
const authorHeader = document.querySelector('.author1')
const titleHeader2 = document.querySelector('.bookTitle2');
const authorHeader2 = document.querySelector('.author2')
const titleHeader3 = document.querySelector('.bookTitle3');
const authorHeader3 = document.querySelector('.author3')

const searchButton = document.querySelector(".titleField");
const oneResultBtn = document.querySelector(".oneResultBtn");
const threeResultBtn = document.querySelector(".threeResultBtn");

const searchInput = document.querySelector(".searchBar");

const endpoint = "https://openlibrary.org/search.json?";

const threeResults = document.querySelectorAll('.threeResult');
const oneResult = document.querySelectorAll(".oneResult");

//event listeners for all the buttons

searchButton.addEventListener('click',getBookData);
threeResultBtn.addEventListener('click', showThreeResults);
oneResultBtn.addEventListener('click', showOneResult );


//checl to see what the result mode is in local storage

function checkLocalStorage() {
    const resultMode = localStorage.getItem("resultMode");
    return resultMode;
}

async function getBookData(){
    //search the searchinput and trim the whitespace
    let title =searchInput.value.trim();



    console.log('worked');
    console.log(title);
// make search title nothing
    let search_title = "";
//replace spaces with plus signs for the endpoint

    for (i = 0; i < title.length; i++) {
        if (title[i] == " "){
            search_title = search_title + "+"
            console.log('switched to +');
        }
        else{
            search_title = search_title +title[i];
        
        }
}
console.log(search_title);

// log the api location for the title
    const current_end = endpoint + "title=" + search_title;
    console.log(current_end);
    // look for all the stuff at the endpoint  
    try{
        const response = await fetch(current_end);
        if(!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json);

        if (json.docs.length > 0){
               
            oneResult.forEach(item => item.style.display = 'grid');
                    
//make variables for all the books and then reset the hidden text content to equal the 
// book author and title

            
            const firstBook = json.docs[0];
            titleHeader.textContent = firstBook.title ;
            authorHeader.textContent = firstBook.author_name;
            
            
            const secondBook = json.docs[1];
            titleHeader2.textContent = secondBook.title ;
            authorHeader2.textContent = secondBook.author_name;

            const thirdBook = json.docs[2];
            titleHeader3.textContent = thirdBook.title ;
            authorHeader3.textContent = thirdBook.author_name;
//set local storage to three result mode
            threeResultMode = true;
            localStorage.setItem("threeResultMode",true);

            //show or hide results based on localstorage pref
            const resultMode = localStorage.getItem("resultMode");
            if(resultMode == "three"){
                oneResult.forEach(item => item.style.display = 'grid');
                threeResults.forEach(item=> item.style.display = 'grid');
            }
            else if (resultMode == 'one'){
                oneResult.forEach(item => item.style.display = 'grid');
                threeResults.forEach(item=> item.style.display = 'none');
            }
            else {
                oneResult.forEach(item => item.style.display = 'grid');
                threeResults.forEach(item=> item.style.display = 'none');
            }


        } else{
            titleHeader.textContent = "No results found";
            authorHeader.textContent ="";
        }

     //error if theres no books in the searchbar

    }catch(err){
        console.log(err)
        alert('Failed to search for new books');
    }
};

//display only one result and set local storage to one 
function showOneResult (){

    //loop through all class with oneResult class
    for( let i = 0 ; i <oneResult.length; i++){
        oneResult[i].style.display ='grid';
    }
    for ( let i = 0 ; i <threeResults.length; i++){
        threeResults[i].style.display = 'none';

    
}

localStorage.setItem("resultMode","one");
}
function showThreeResults(){
        var contentVisible = document.getElementsByClassName("threeResult");

    //loop through all class with threResult  class
        for (let i = 0; i < contentVisible.length; i++){

            if (contentVisible[i].style.display === 'none'){
            contentVisible[i].style.display = 'grid';

            }
         else{
            contentVisible[i].style.display = 'none';

        }
      
    }
   localStorage.setItem("resultMode","three");

};


//same local storage thing as previous assignments
window.addEventListener('DOMContentLoaded', () =>{
    checkLocalStorage()
});



