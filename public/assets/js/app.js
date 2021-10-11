import barchart from './components/barchart.js'
import { mask, mphone } from './maksPhone.js';

// Animação wow zoomIn
const wow = new WOW({
    boxClass: "wow", 
    animateClass: "animated", 
    offset: 0, 
    mobile: true, 
    live: true, 
  });
  wow.init(); // starta animação

const hamburguer = document.querySelector(".hamburguer")
const contactForm = document.querySelector(".contact-form")

const name = document.querySelector('.fullname')
const telefone = document.querySelector('.telefone')
const email = document.querySelector('.email')
const message = document.querySelector('.message')

// Ativa estilos do header quando scrollTop > 50
window.onscroll = () => {onScrollStyle()}
const onScrollStyle = () => {
    if(document.body.scrollTop > 50 | document.documentElement.scrollTop > 50) {
        document.getElementById("home").className = "sticky"
    } else{
         document.getElementById("home").className = ""
    }
}

// Ativa Mascara Telefone
telefone.addEventListener('keyup', (e) => {
    mask(e.target, mphone)
})

// Ativa o menu Hamburguer, caso for clicado
hamburguer.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".navigation").classList.toggle("active");
})

// Envia no Método Post para o Server
const RealizaRequisicao = async (formData) => {
    await fetch('/.netlify/functions/server',{
        method: "POST",
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
        })  
        .then(response => console.log(response.json()))
        .catch(erro => console.log(erro))
    alert("Mensagem Enviada")
}

// Controle de formulário
contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = {
        name: name.value,
        telefone: telefone.value,
        email: email.value,
        message: message.value
    }
    const isTelefone = telefone.value.length
    if (isTelefone === 15) {
        RealizaRequisicao(formData)
        document.getElementById('form').reset() // Apaga Formulário
    }else {
        alert("Preencha o campo Telefone")
    }
})

document.addEventListener("DOMContentLoaded", () => {barchart()})