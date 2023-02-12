warn()

//----------------------------------------- [NAVBAR] -----------------------------------------

const toggleButton = document.getElementById("toogle-button")
const navbarLinks = document.getElementById("navbar-links")

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
})

let links = false;

function linkPage() {
    window.location.href = "https://www.linktr.ee/nicoproyer"
}

//----------------------------------------- [WARN] -----------------------------------------

function warn() {
    console.log("%cWARNING", "font-size:48px; color:red;")
    console.log("%cNever put in any text in this console, anyone says to you!", "font-size:25px; color:aqua")
    console.log("%cIf you know, what you do here, you are free to go!", "font-size:25px; color:aqua")
    console.log("%cBUT I WARNED YOU! ", "color:red; font-size: 60px")
    console.log("%cWe won't take any charges, if your data is stolen, or your PC is hacked!", "font-size:20px; color:aqua")
    console.log("--------------------------------------------[ LOGS ]--------------------------------------------")
}

window.addEventListener('load', () => {
    const loadingBar = document.getElementById("load");
    const body = document.getElementById("body")
    const navbar = document.getElementById("navbar")
    window.location.href = "./index#body";
    navbar.style.top = "0"
    setTimeout(() => {
        body.style.overflow = "auto"
        loadingBar.style.top = "-100vh"
    }, 500);

})