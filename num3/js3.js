function search(){
    let textToSearch = document.querySelector('#input').value;
    let paragraph = document.querySelector('#parag');
    
    textToSearch =  textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let pattern = new RegExp(`${textToSearch}`,'gi');
    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)

}