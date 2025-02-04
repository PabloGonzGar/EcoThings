const dayNightSwitch = document.getElementById("dayNightSwitch");
const logo = document.getElementById("logo")
console.log(logo);
dayNightSwitch.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark");
        if(logo.firstChild){
            logo.removeChild(logo.firstChild)
        }
        const logoNoche = document.createElement("img")
        logoNoche.setAttribute("src","resources/images/logo-noche.svg")
        logoNoche.setAttribute("width","70px")
        logo.appendChild(logoNoche)
        
    } else {
        
        document.body.classList.remove("dark");
        
        if(logo.firstChild){
            logo.removeChild(logo.firstChild)
        }
        const logoDia = document.createElement("img")
        logoDia.setAttribute("src","resources/images/logo-dia.svg")
        logoDia.setAttribute("width","70px")
        logo.appendChild(logoDia)
    }
});