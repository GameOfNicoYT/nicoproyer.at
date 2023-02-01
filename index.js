warn()

//----------------------------------------- [NAVBAR] -----------------------------------------

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

function toogleNavbar() {
    navbarLinks.classList.toggle("active")
}
//----------------------------------------- [CONTEXT MENU] -----------------------------------------

let ctxActive = false;
const yourCtxElement = document.getElementById('context-menu')

function openCustomContext(x, y) {
    yourCtxElement.style.top = y - 50 + 'px';
    yourCtxElement.style.left = x + 'px';
    yourCtxElement.classList.add("active");
    ctxActive = true;
    return ctxActive;
}

window.addEventListener('contextmenu', function (e) {

    console.log("Left ctrl is pushed: " + e.ctrlKey)

    if (e.ctrlKey == true) {

        if (ctxActive = true) {
            yourCtxElement.classList.remove("active");
        }

        console.log("CONTEXT MENU")
        return;
    } else {

        e.preventDefault();

        // get your X/Y here...
        const x = e.clientX;
        const y = e.clientY;
        openCustomContext(x, y);
        console.log("CONTEXT MENU")
    }
}, false);

window.addEventListener("click", function () {
    this.document.getElementById("context-menu").classList.remove("active")
});

function contextMenuHome_active() {
    document.getElementById("context-menu-home").innerHTML = '<a href="/index.html"><i class="fa-solid fa-house fa-beat" ></i>Home</a>'
}

function contextMenuHome_notActive() {
    document.getElementById("context-menu-home").innerHTML = '<a href="/index.html"><i class="fa-solid fa-house" ></i>Home</a>'
}

function contextMenuContact_active() {

    document.getElementById("context-menu-contact").innerHTML = `            <a onmouseout="contextMenuContact_notActive" onmouseover="contextMenuContact_active" href="/kontakt.html"><i class="fa-solid fa-address-book fa-bounce" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0;" ></i>Kontakt</a>`


}

function contextMenuContact_notActive() {


    document.getElementById("context-menu-contact").innerHTML = `            <a onmouseout="contextMenuContact_notActive" onmouseover="contextMenuContact_active" href="/kontakt.html"><i class="fa-solid fa-address-book"></i>Kontakt</a>`

}

function contextMenuLinks_active() {
    document.getElementById("context-menu-link").innerHTML = '<a href="/link.html"><i class="fa-solid fa-link fa-flip"></i>Links</a>'
}

function contextMenuLinks_notActive() {
    document.getElementById("context-menu-link").innerHTML = '<a href="/link.html"><i class="fa-solid fa-link"></i>Links</a>'
}


function linkPage() {
    window.location.href = "https://www.linktr.ee/nicoproyer"
}

window.localStorage.clear();

//----------------------------------------- [CONTEXT MENU] -----------------------------------------

function warn() {
    console.log("%cWARNING", "font-size:48px; color:red;")
    console.log("%cNever put in any text in this console, anyone says to you!", "font-size:25px; color:aqua")
    console.log("%cIf you know, what you do here, you are free to go!", "font-size:25px; color:aqua")
    console.log("%cBUT I WARNED YOU! ", "color:red; font-size: 60px")
    console.log("%cWe won't take any charges, if your data is stolen, or your PC is hacked!", "font-size:20px; color:aqua")
    console.log("--------------------------------------------[ LOGS ]--------------------------------------------")
}