window.addEventListener("load", solve);

function solve() {
  let inputs = document.querySelectorAll("form input,select,textarea");

  let publishBtn = document.getElementById("form-btn").addEventListener("click", publishTask);
  
  let main = document.getElementById("main");

  let sideWrapper = document.querySelector("#side-wrapper");
  let formWrapper = document.querySelector(".form-wrapper");
  let previewList = document.getElementById("preview-list");
 
  function publishTask(event){
    event.preventDefault();
    let input = {};
 
    let isItEmpty = Array.from(inputs).some(x  => !x.value);
 
    if (isItEmpty) {
      return;
    }
    event.target.disabled = true;
 
    Array.from(inputs).forEach(x =>{
      input[x.id] = x.value;
    })
 
    for(let input of Array.from(inputs)){
        input.value = '';
    }
 
    let li = document.createElement("li");
    li.classList.add("story-info");
 
    let article = document.createElement("article");
 
    let h4Names = document.createElement("h4Names");
    h4Names.textContent = `Name: ${input['first-name']} ${input['last-name']}`;
 
    let p = document.createElement("p");
    p.textContent = `Age: ${input['age']}`;
 
    let pTitle = document.createElement("P");
    pTitle.textContent = `Title: ${input['story-title']}`;
 
    let pGenre = document.createElement("p");
    pGenre.textContent = `Genre: ${input['genre']}`;
 
    let pStory = document.createElement("p");
    pStory.textContent = input['story'];
 
    let editBtn = document.createElement("button")
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Story";

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete Story";
 
    let saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save Story";
 
    article.appendChild(h4Names);
    article.appendChild(p);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    previewList.appendChild(li);
  }
}