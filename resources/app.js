const dayNightSwitch = document.getElementById("dayNightSwitch");
const logo = document.getElementById("logo")
const nav = document.getElementById("nav")


dayNightSwitch.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark");
        if (logo.firstChild) {
            logo.removeChild(logo.firstChild)
        }
        const logoNoche = document.createElement("img")
        logoNoche.setAttribute("src", "resources/images/logo-noche.svg")
        logoNoche.setAttribute("width", "70px")
        logo.appendChild(logoNoche)

    } else {

        document.body.classList.remove("dark");

        if (logo.firstChild) {
            logo.removeChild(logo.firstChild)
        }
        const logoDia = document.createElement("img")
        logoDia.setAttribute("src", "resources/images/logo-dia.svg")
        logoDia.setAttribute("width", "70px")
        logo.appendChild(logoDia)


    }
});

window.addEventListener("scroll", () => {
    console.log("ahora");
    //no capta el window.scroll > 1 --> siempre es false

    if (window.scrollY > 200) {
        console.log("aqui");
        nav.setAttribute("class", "scrolled")
    } else {
        console.log("no");
        nav.classList.remove("scrolled")
    }
})


const flipCards = document.querySelectorAll(".card .front");

flipCards.addEventListener("mouseover", function () {
    flipCards.setAttribute("class", "flip");
});

const flipCardsBack = document.querySelectorAll(".card .back");

flipCardsBack.addEventListener("mouseover", function () {
    this.classList.add("flip");
});
