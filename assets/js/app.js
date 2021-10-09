import barchart from './components/barchart.js'

window.onscroll = () => {myFunction()}
const myFunction = () => {
    if(document.body.scrollTop > 50 | document.documentElement.scrollTop > 50) {
        document.getElementById("home").className = "sticky"
    } else{
         document.getElementById("home").className = ""
    }
}

document.querySelector(".hamburguer").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".navigation").classList.toggle("active");
})

const wow = new WOW({
    boxClass: "wow", 
    animateClass: "animated", 
    offset: 0, 
    mobile: true, 
    live: true, 
  });
  wow.init();

document.addEventListener("DOMContentLoaded", () => {barchart()})