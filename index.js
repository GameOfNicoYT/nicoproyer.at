//----------------------------------------- [NAVBAR] -----------------------------------------

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//----------------------------------------- [CONTEXT MENU] -----------------------------------------

function openCustomContext(x, y) {
    const yourCtxElement = document.getElementById('context-menu')
    yourCtxElement.style.top = y-50 + 'px';
    yourCtxElement.style.left = x + 'px';
    yourCtxElement.classList.add("active");
}

window.addEventListener('contextmenu', function (e) {
    e.preventDefault();

    // get your X/Y here...
    const x = e.clientX;
    const y = e.clientY;
    openCustomContext(x, y);
    console.log("CONTEXT MENU")
}, false);

/*
function handleOnContextMenu(e) {
  e.preventDefault();

  const x = e.clientX;
  const y = e.clientY;

  openCustomContext(x, y)
}

/*
window.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  var contextElement = document.getElementById("context-menu");
  contextElement.style.top = event.offsetY + "px";
  contextElement.style.left = event.offsetX + "px";
  contextElement.classList.add("active");
});


function contextMenuContact_active(event) {
  const ctxMenu = document.getElementById('context-menu');
  ctxMenu.style.top = `${event.clientY}px`;
  ctxMenu.style.left = `${event.clientX}px`;
}

*/

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