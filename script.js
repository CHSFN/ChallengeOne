const textArea = document.querySelector(".text-area")
const texto = document.querySelector(".texto")
const mensagemAlerta = document.querySelector(".MensagemAlerta")
const mensagemMiuda = document.querySelector(".MensagemMiuda")

function btnCodificar() {
    const textoCodificado = codificar(textArea.value)
    texto.value = textoCodificado
    textArea.value = ""
    verificarMensagem()
}

function codificar(string) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    string = string.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (string.includes(matrizCodigo[i][0])) {
            string = string.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return string
}

function btnDescodificar() {
    const textoDescodificado = descodificar(textArea.value)
    texto.value = textoDescodificado
    textArea.value = ""
    verificarMensagem()
}

function descodificar(string) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    string = string.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (string.includes(matrizCodigo[i][1])) {
            string = string.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return string;
}

function btnCopiar() {
    const textoParaCopiar = texto.value
    navigator.clipboard.writeText(textoParaCopiar)
    alert("Texto Copiado com sucesso!")
    texto.value =  ""
    mostrarMensagem()
}

function verificarMensagem() {
    if (texto.value.trim() === "") {
        mensagemAlerta.style.display = "block"
        mensagemMiuda.style.display = "block"
        texto.style.backgroundImage = "url(/img/crianca.png)"
    } else {
        mensagemAlerta.style.display = "none"
        mensagemMiuda.style.display = "none"
        texto.style.backgroundImage = "none"
    }
}

function mostrarMensagem() {
    mensagemAlerta.style.display = "block"
    mensagemMiuda.style.display = "block"
    texto.style.backgroundImage = "url(/img/crianca.png)"
}
