const endpoint = "https://openlibrary.org/search.json?"
const searchButton = document.querySelector(".searchButton")
const titleField = document.querySelector("#titleField")

searchButton.addEventListener('click',searchBooks);

async function searchBooks(){
    let title = titleField.value;
    console.log('worked');

    let search_title = "";
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

    let current_end = String(endpoint +"title=" + search_title);
    console.log(current_end);

    try{
        const response = await fetch(current_end);
        if(!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json);

        displayBooks(json);

    }catch(err){
        console.log(err)
        alert('Failed to search for new books');
    }


  

}
function displayBooks(json){

    if (!json.docs || json.docs.length === 0){
        alert('no books found');
        return;
    }
    for(i=0; i<5; i++){
        const book = results[i];
        const title_id = `book${i + 1}`;
        
        const titleElem = document.getElementById(title_id);

        console.log(title_id)
        console.log(title_id)
         if (titleElem) {
      titleElem.textContent = book.title || "Untitled book";
    }

        document.getElementById(title_id).textContent = json['docs'][i]['title'];
    }
}



