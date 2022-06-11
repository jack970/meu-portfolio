const carouselDigitacao = async (carouselList, eleRef) => {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await sleep(1500);
      await deleteSentence(eleRef);
      await sleep(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

const updateFontColor = (eleRef, color) => {
    eleRef.style.color = color;
}

async function deleteSentence(eleRef) {
    const sentence = eleRef.innerText;
    const letters = sentence.split("");

    while(letters.length > 0) {
      await sleep(100);
      letters.pop();
      eleRef.innerText = letters.join("");
    }
} 

const typeSentence = async (sentence, eleRef, delay = 100) => {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await sleep(delay);
      eleRef.innerHTML += letters[i]
      i++
    }
    return;
  }
  
  
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default carouselDigitacao;