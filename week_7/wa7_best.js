//  https://www.javascripttutorial.net/javascript-dom/javascript-domcontentloaded/
 document.addEventListener("DOMContentLoaded", () => {   
    const currentShow = document.querySelector(".current-show");
        const confirmationMSG = document.querySelector(".confirmation-message");
        const formInput = document.querySelector(".suggestion-box");
        const formData = document.querySelector(".suggestion-box-input");
        const savedTheme = localStorage.getItem('userTheme');
        const main = document.querySelector('main');
        const savedLanguage = localStorage.getItem('userLanguage');


        //these are the footer buttons for text size changes
        const small_text = document.querySelector("#small-text");
        const medium_text = document.querySelector("#medium-text");
        const large_text = document.querySelector("#large-text");
        const clear_text = document.querySelector("#clear-preferences");
        //nav
        const navToggle = document.querySelector(".nav-toggle");
        const navMenu = document.querySelector('.nav-menu');
    // buttons for language changes
        const languageToggle = document.querySelector('.language');
        const spanishText = document.querySelectorAll('.spanish');
        
        // photo filter
        const filterButtons = document.querySelectorAll('.gallery-nav button');
        const photoCards = document.querySelectorAll('.past-show-card');


let info = false;
   
let form_input = false;
let spanishMode= false;

let btn = document.querySelector('.theme');

//check local storage if localstorage.getitem("spanish") == true;
//if spanish is false, run the part that isn't spanish, and don't need to set item 
function checkLocalStorageLanguage(){
    // variable for state of spanish mode can be true or false
    const isSpanish = localStorage.getItem("spanish");
// if spanish is true show the spanish language
// shoutout josie for helping me with this 
    if (isSpanish == 'true'){
        spanishText.forEach (item =>{
            item.style.display = "grid";
        });
        spanishMode= true;
    }
}


//give my button something to listen for and onclick run changelanguage
languageToggle.addEventListener('click', changeLanguage);


// function defintion
function changeLanguage(){
    console.log("worked");

// https://www.w3schools.com/jsref/met_document_queryselectorAll.asp
// if spanish mode isn't active and button is clicked, make it visible
    if  (spanishMode == false){
        spanishText.forEach (item =>{
            item.style.display = "grid";
        });
        spanishMode = true;
        localStorage.setItem("spanish",true);
    }

// if spanish mode is active and button is clicked, make it hidden
    else{
     spanishText.forEach (item =>{
            item.style.display = "none";
        });
        spanishMode = false;
        localStorage.setItem("spanish",false);
    }
    
}



    function confirmation(event){
        if (event.key == "Enter") {
            if (form_input == false) {
                confirmationMSG.style.display = "grid";
                form_input = true;
                formData.value="";

            }
            else {
                confirmationMSG.style.display = "none";
                form_input = false;
                
            }
        
            }
        }
    
    addEventListener("keydown", (event) => {confirmation(event)})


    btn.addEventListener('click', getNewTheme);

       //new funciton
       //find out what the theme is RIGHT NOW using .classname 
    //    put CURRENT THEME into nexdt funciton SETTHEME

        function getNewTheme(){
                const currentTheme = document.body.className ;
                setTheme(currentTheme);
        }
        

                function setTheme(pageTheme) {
            // make a new variable newTheme
            let newTheme;
                if (pageTheme == 'dark')
                 {
                    newTheme = 'light';
                }
                else {
                    newTheme = 'dark';
                }
                // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
            localStorage.setItem('userTheme', newTheme);
            document.body.className = newTheme;
        }
                
    window.addEventListener('load', function() {
            const savedTheme = localStorage.getItem('userTheme');
            document.body.className = savedTheme;
        });



    function set_text_size(){
    if(localStorage.getItem("fontSize") !== null){
        let temp_size = localStorage.getItem("fontSize");
        document.querySelector("html").style.fontSize = String(temp_size) + "px";
    }
}
function change_text_size(size){
    //temp_size is to hold the value in pixels as a variable
    let temp_size = size * 16;

    document.querySelector('html').style.fontSize = String(temp_size) + "px";
    localStorage.setItem("fontSize", temp_size);
}
function clear_local_storage(size){
    let temp_size = size * 16;
    localStorage.clear();
    document.querySelector("html").style.fontSize = String(temp_size) + "px";

}


//anvitha and TA Josie reccommended from StackOverflow and it worked wonderfully 
window.addEventListener('DOMContentLoaded', () =>{
    checkLocalStorageLanguage()
});
        window.addEventListener('load', set_text_size);

        small_text.addEventListener('click', () => {change_text_size(0.8)});
        medium_text.addEventListener('click', () => {change_text_size(1)});
        large_text.addEventListener('click', () => {change_text_size(1.5)});
        clear_text.addEventListener('click', () => {change_text_size(1)});



 });

   filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const filterValue = event.target.textContent.toLowerCase().trim();
      filterPhotos(filterValue);
    });
  });

  function filterPhotos(category) {
    photoCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
