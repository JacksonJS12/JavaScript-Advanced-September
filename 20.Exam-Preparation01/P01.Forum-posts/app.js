window.addEventListener("load", solve);

function solve(){
    document.getElementById("publish-btn").addEventListener("click", createPost);
    document.getElementById("clear-btn").addEventListener("click", clearPost);
    let title = document.getElementById("post-title");
    let category = document.getElementById("post-category");
    let content = document.getElementById("post-content");
    let reviewSection = document.getElementById("review-list");
    let approveSection = document.getElementById("published-list");

    function createPost(event){
        let titleValue = title.value;
        let categoryValue = category.value;
        let contentValue = content.value;

        if(!titleValue || !categoryValue || !categoryValue){
            return;
        }
        createDOMElements(titleValue, categoryValue, contentValue);
    }

    function clearFormField(){
        title.value = "";
        content.value = "";
        category.value = "";
    }

    function createDOMElements(titleValue, categoryValue, contentValue){
        let li = document.createElement("li");
        li.classList.add("rpost");

        let article = createArticle(titleValue, categoryValue, contentValue);
        
        let editButton = document.createElement("button");
        editButton.classList.add("action-btn");
        editButton.classList.add("edit"); 
        editButton.textContent = "Edit";
        editButton.addEventListener("click", editPost)

        let approveButton = document.createElement("button");
        approveButton.classList.add("action-btn");
        approveButton.classList.add("approve"); 
        approveButton.textContent = "Approve";
        approveButton.addEventListener("click", approvePost)

        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(approveButton);
        reviewSection.appendChild(li);

    }

    function createArticle(titleValue, categoryValue, contentValue){
        let article = document.createElement("article");

        let h = document.createElement("h4");
        h.textContent = titleValue;

        let categoryP = document.createElement("p"); 
        categoryP.textContent = `Category: ${categoryValue}`;

        let contentP = document.createElement("p");
        contentP.textContent = `Content: ${contentValue}`;

        article.appendChild(h);
        article.appendChild(categoryP);
        article.appendChild(contentP);


        return article;
    }

    function editPost(e){
        let currentPost = e.target.parentElement;
        let articleContent = currentPost.getElementByTagName("article")[0].children;

        let titleValue = articleContent[0].textContent;
        let categoryValue = articleContent[1].textContent;
        let contentValue = articleContent[2].textContent;

        title.value = titleValue;
        category.value = categoryValue.split(": ")[1];
        content.value = contentValue.split(": ")[1];
        currentPost.remove();
    }

    function approvePost(e){
        let currentPost = e.target.parentElement;
        approveSection.appendChild(currentPost);
        Array.from(currentPost.querySelectorAll("button").forEach(btn => btn.remove()))
    }

    function clearPost(e){
        Array.from(approveSection.children).forEach(li => li.remove());
    }
} 