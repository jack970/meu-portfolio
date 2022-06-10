import barchart from './components/barchart.js'
import ModalAlert from './components/modalAlert.js';
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

// Ativa estilos do header quando scrollTop > 50
window.onscroll = () => {onScrollStyle()}
const onScrollStyle = () => {
    if(document.body.scrollTop > 50 | document.documentElement.scrollTop > 50) {
        document.getElementById("home").className = "sticky"
    } else{
         document.getElementById("home").className = ""
    }
}
// --------------------

// Ativa Mascara Telefone
const telefone = document.querySelector('.telefone')
telefone.addEventListener('keyup', (e) => {
    mask(e.target, mphone)
})
// --------------------

// Ativa o menu Hamburguer, caso for clicado
const hamburguer = document.querySelector(".hamburguer")
hamburguer.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".navigation").classList.toggle("active");
})
// --------------------

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
        .then(response => {
            return response.json()
        })
        .then(response =>{
            ModalAlert("info")
            })
        .catch(erro => {
            ModalAlert("danger")
            console.log(erro)
        })
}
// --------------------

// Controle de formulário
const contactForm = document.querySelector(".contact-form")
const name = document.querySelector('.fullname')
const email = document.querySelector('.email')
const message = document.querySelector('.message')

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
// --------------------

const botaoTopo = document.querySelector(".botao-voltar-topo")
function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
botaoTopo.addEventListener("click", scrollTop)