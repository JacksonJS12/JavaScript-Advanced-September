function validate() {
    let input = document.getElementById("email");
    input.addEventListener("change", onchange);

    function onchange(e){
        let email = e.target.value;
        let emailPattern = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/g;
        if(emailPattern.test(email)){
            e.target.classList.remove("error");
        } else {
            e.target.classList.add("error");
        }
    }
}