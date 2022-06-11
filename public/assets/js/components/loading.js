const LoadingInBotaoEnviar = (state) => {
    const html = `<div class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>`
    let formFieldBtn = document.querySelector(".form-field.btn")
    if (state) {
        formFieldBtn.innerHTML = html
    } else {
        formFieldBtn.innerHTML = `<input type="submit" name="submit" class="submit" value="Enviar">`
    }
}
export default LoadingInBotaoEnviar