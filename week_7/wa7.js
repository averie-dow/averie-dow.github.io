 const currentShow = document.querySelector(".current-show");
    //a key press will only work on a particular area of your screen if there is some way to toggle focus, if u want the whole page just dont add anything to specify
    let color_changed = false;

    function changeBGCol(event) {
        console.log("triggered");

        if (event.key == "c") {

            if (color_changed == false) {
                currentShow.style.backgroundColor = "pink";
                color_changed = true;
            }
            else {
                currentShow.style.backgroundColor = "#ffffff";
                color_changed = false;
            }
            
        }
    }
    const confirmationMSG = document.querySelector(".confirmation-message")
    const formInput = document.querySelector(".suggestion-box");
    const formData = document.querySelector(".suggestion-box-input")
    let form_input = false;
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
    addEventListener("keydown", (event) => {changeBGCol(event)})


//give .theme html elements a name , btn
       let btn = document.querySelector('.theme');
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
//give the btn an event listener and it will listen for the theme function 
       btn.addEventListener('click', getNewTheme);

       //new funciton
       //find out what the theme is RIGHT NOW using .classname 
    //    put CURRENT THEME into nexdt funciton SETTHEME
        function getNewTheme(){
                const currentTheme = document.body.className ;
                setTheme(currentTheme);
        }
//new function to usse the current page theme to flip to the opposite
// pageTheme == same as current theme but different bc already used currentTheme
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classname_toggle
        function setTheme(pageTheme) {
            // make a new variable newTheme
            let newTheme;
                if (pageTheme == 'dark')
                 {
                    newTheme = 'light'
                }
                else {
                    newTheme = 'dark';
                }
                // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
            localStorage.setItem('userTheme', newTheme);
            document.body.className = newTheme;
        }

//  localStorage.setItem('userTheme', newTheme);
//             document.body.className = newTheme;
        window.addEventListener('load', function() {
            const savedTheme = localStorage.getItem('userTheme');
            document.body.className = savedTheme;
        });



        const main = document.querySelector('main');

        //these are the footer buttons for text size changes
        const small_text = document.querySelector("#small-text");
        const medium_text = document.querySelector("#medium-text");
        const large_text = document.querySelector("#large-text");
        const clear_text = document.querySelector("#clear-preferences");

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

        //* clear_local_storage
function clear_local_storage(size){
    let temp_size = size * 16;
    localStorage.clear();
    document.querySelector("html").style.fontSize = String(temp_size) + "px";

}
        window.addEventListener('load', set_text_size);

        small_text.addEventListener('click', () => {change_text_size(0.8)});
        medium_text.addEventListener('click', () => {change_text_size(1)});
        large_text.addEventListener('click', () => {change_text_size(1.5)});
        clear_text.addEventListener('click', () => {change_text_size(1)});

