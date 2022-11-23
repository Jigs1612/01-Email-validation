`use strict';`;
function validation() {
    let form = document.querySelector("#form");
    let text = document.querySelector("#text");
    let email = document.querySelector("#email").value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = `This is a email address`;
        text.style.color = "#00ff00";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = `Enter a valid email address`;
        text.style.color = "#ff0000";
    }
    if (email === "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = `Enter a valid email address`;
        text.style.color = "#ff0000";
    }
}
