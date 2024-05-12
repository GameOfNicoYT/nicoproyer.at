warn();

//----------------------------------------- [NAVBAR] -----------------------------------------

const toggleButton = document.getElementById("toogle-button");
const navbarLinks = document.getElementById("navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let links = false;

function linkPage() {
  window.location.href = "https://www.linktr.ee/nicoproyer";
}

//----------------------------------------- [WARN] -----------------------------------------

function warn() {
  console.log("%cWARNING", "font-size:48px; color:red;");
  console.log(
    "%cNever put in any text in this console, anyone says to you!",
    "font-size:25px; color:aqua"
  );
  console.log(
    "%cIf you know, what you do here, you are free to go!",
    "font-size:25px; color:aqua"
  );
  console.log("%cBUT I WARNED YOU! ", "color:red; font-size: 60px");
  console.log(
    "%cWe won't take any charges, if your data is stolen, or your PC is hacked!",
    "font-size:20px; color:aqua"
  );
  console.log(
    "--------------------------------------------[ LOGS ]--------------------------------------------"
  );
}

window.addEventListener("load", () => {
  const loadingBar = document.getElementById("load");
  const body = document.getElementById("body");
  const navbar = document.getElementById("navbar");
  if (document.cookie.indexOf("consent") > -1) {
    console.log("No consent!");
  } else {
    window.location.href = "./#cmpscreen";

    var currentDate = new Date();
    var oneMonth = 30 * 24 * 60 * 60 * 1000;
    var expirationDate = new Date(currentDate.getTime() + oneMonth);
    var expires = expirationDate.toUTCString();
    document.cookie = "consent=true; expires=" + expires + "; path=/";
  }

  navbar.style.top = "0";
  setTimeout(() => {
    body.style.overflow = "auto";
    loadingBar.style.top = "-100vh";
  }, 500);
});

const chance = Math.floor(Math.random() * 2);

console.log(chance);

function isCookieSet(cookieName) {
  // Encode the cookie name to handle special characters
  var encodedCookieName = encodeURIComponent(cookieName) + "=";
  var cookies = document.cookie.split(";"); // Teile den Cookie-String in einzelne Cookies

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim(); // Entferne Leerzeichen am Anfang/Ende
    if (cookie.indexOf(encodedCookieName) === 0) {
      return true; // Cookie gefunden
    }
  }
  return false; // Cookie nicht gefunden
}

function checkCookieFalse(cookieName) {
  var cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(cookieName + "="))
    .split("=")[1];

  return cookieValue === "false";
}

if (!checkCookieFalse("newdesign")) {
  console.log("new design");
  window.location.href = "https://test.nicoproyer.at?dialogue=true";
}

if (chance == 1 && !checkCookieFalse("newdesign")) {
  window.location.href = "https://test.nicoproyer.at?dialogue=true";
}
