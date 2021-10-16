const ModalAlert = (typeAlert) => {
    const arrayModal = typeAlert === 'info' 
                                ? {
                                    title: "Mensagem Enviada",
                                    icon: "./assets/icons/check-mark.svg",
                                    classImg: "info-img",
                                    message: "Sua Mensagem foi enviada"
                                } : {
                                    title: "Mensagem Não Enviada",
                                    icon: "./assets/icons/icon-x.svg",
                                    classImg: "danger-img",
                                    message: "Erro ao enviar a sua mensagem"
                                }
    const html = `
    <div id="modal" class="modal">
        <div class="modal-header ${typeAlert}">
            <h1>${arrayModal.title}</h1>
            <div class="modal-close">X</div>
        </div>
        <div class="modal-content">
            <img class="${arrayModal.classImg}" src="${arrayModal.icon}" alt="message-icon">
            <p>${arrayModal.message}</p>
        </div>
    </div>
    `

    document.querySelector(".modal-app").innerHTML = html

    document.querySelector(".modal-close").addEventListener('click', () => {
        document.getElementById("modal").style.display ="none"
    })
}

export default ModalAlert