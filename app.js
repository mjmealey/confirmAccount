const username = document.getElementById("username")
const password = document.getElementById("password")
const formCancel = document.getElementById("formCancel")

username.addEventListener("input", (e) => {
    if (e.target.id === "username") {
        if (username.validity.patternMismatch) {
            username.setCustomValidity("Please enter your login information")
        } else { password.setCustomValidity("") }
    }
})

password.addEventListener("input", (e) => {
    if (e.target.id === "password") {
        if (password.validity.patternMismatch) {
            password.setCustomValidity("Please enter your login information")
        } else { password.setCustomValidity("") }
    }
})

formCancel.addEventListener("submit", (e) => {
    if(e.target.id === "formCancel"){
        e.preventDefault()

        if(username.checkValidity() && password.checkValidity()){
            window.location.href = "https://mjmealey.github.io/cancel-page/"
        }
        else{password.setCustomValidity("Your username or password is incorrect")}
    }
})