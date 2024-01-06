let LocalTheme = localStorage.getItem("theme");

let systemDark = window.matchMedia("(prefers-color-scheme: dark)");

let htmlELement = document.documentElement.getAttribute("data-theme");

let button = document.getElementById("ThemeMode");
let button_2 = document.getElementById("ThemeModeS")

let initial_theme = LocalTheme || (systemDark.matches ? "dark" : "light");

document.documentElement.setAttribute("data-theme", initial_theme);

button_2.checked = button.checked = initial_theme === "dark";

function changetheme(){
    currenttheme = document.documentElement.getAttribute("data-theme");
    newtheme = currenttheme === 'dark' ? 'light' : "dark";
    document.documentElement.setAttribute("data-theme", newtheme)
    localStorage.setItem("theme", newtheme);
    button_2.checked = button.checked = newtheme === "dark";
}

button.addEventListener("click", changetheme);
button_2.addEventListener("click", changetheme);

let HamburgerButton = document.getElementById("");
let NavButtons = document.getElementById("NavButtonsAccordion");
let NavItems = document.getElementsByClassName("")