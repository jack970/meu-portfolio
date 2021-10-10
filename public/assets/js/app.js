import barchart from './components/barchart.js'

const hamburguer = document.querySelector(".hamburguer")
const contactForm = document.querySelector(".contact-form")

const name = document.querySelector('.fullname')
const email = document.querySelector('.email')
const message = document.querySelector('.message')

// Animação wow zoomIn
const wow = new WOW({
    boxClass: "wow", 
    animateClass: "animated", 
    offset: 0, 
    mobile: true, 
    live: true, 
  });
  wow.init(); // starta animação

// Ativa estilos do header quando scrollTop > 50
window.onscroll = () => {myFunction()}
const myFunction = () => {
    if(document.body.scrollTop > 50 | document.documentElement.scrollTop > 50) {
        document.getElementById("home").className = "sticky"
    } else{
         document.getElementById("home").className = ""
    }
}

// Ativa o menu Hamburguer, caso for clicado
hamburguer.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".navigation").classList.toggle("active");
})

// Controle de formulário
contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = {
        name: name.value,
        email: email.value,
        message: message.value
    }

    await fetch('/.netlify/functions/server',{
        method: "POST",
        body: JSON.stringify(
            formData
        ),
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
            }).then(
                (response) => (response.json())
            ).then((messages) => {console.log(messages)})
})

document.addEventListener("DOMContentLoaded", () => {barchart()})