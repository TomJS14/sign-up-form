const blob = document.querySelector(".blob")
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
const password = document.querySelector(".password")
const confirmPassword = document.querySelector(".confirmPassword")
const submit = document.querySelector(".formSubmit")
const error = document.querySelector(".error")

/* /* Blob movement */
document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`

    }, {duration: 3000, fill: "forwards"});    
}

/* Text animation for H1 */

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations) {
            return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]})
    .join("");
    
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 2;

    }, 40);
}

confirmPassword.addEventListener("keyup", passwordCheck)
password.addEventListener("keyup", passwordCheck)

function passwordCheck() {
    if (confirmPassword.value === password.value) {
        confirmPassword.setAttribute("style", "background-color: green")
        error.textContent = ""
        submit.disabled = false;
        console.log("match")
    }
    else {
        confirmPassword.setAttribute("style", "background-color: red")
        error.setAttribute("style", "color: white");
        error.textContent = "Passwords do not match"
        console.log("no match");
        submit.disabled = true;
        
    }
}