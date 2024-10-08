// Seletores
const input = document.querySelector("#input-texto");
const btnCriptografar = document.querySelector("#btn-criptografar");
const btnDescriptografar = document.querySelector("#btn-descriptografar");
const mensagem = document.querySelector("#mensagem");
const btnCopiar = document.querySelector("#btn-copiar");


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


// esconde a div-aparece da tela
document.getElementById("div-aparece").style.display = 'none';
inputverificar();

// click e encripta o texto
document.getElementById('btn-criptografar').onclick = (e) => {
  e.preventDefault();
  const textoEncriptado = encriptar(input.value.toLowerCase());
  mensagem.value = textoEncriptado;
  input.value = "";
  aparece()
}

// click e desencripta o texto
document.getElementById('btn-descriptografar').onclick = (e) => {
  e.preventDefault();
  const textoDecriptado = decodificar(input.value);
  mensagem.value = textoDecriptado;
  input.value = "";
  aparece()
}

// click e validação para copiar o texto
document.getElementById('btn-copiar').onclick = (e) => {
  e.preventDefault();
  const mensagem = document.querySelector("#mensagem");
  mensagem.select();
  navigator.clipboard.writeText(mensagem.value)
  mensagem.value = "";
}

// encriptar
function encriptar(stringEncriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringEncriptada.includes(matrixCode[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
  return stringEncriptada
}

// decodificar
function decodificar(stringDecriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDecriptada = stringDecriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringDecriptada.includes(matrixCode[i][1])) {
      stringDecriptada = stringDecriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
  return stringDecriptada
}

// aparecer e desaparecer elementos na tela
function aparece() {
  document.getElementById("div-desaparece").style.display = 'none';
  document.getElementById("div-aparece").style.display = 'block';
}

// aparecer e desaparecer elementos na tela
function home() {
  document.getElementById("div-aparece").style.display = 'none';
  document.getElementById("div-desaparece").style.display = 'block';
}


// verifica o texto digitado pelo usuário
function inputverificar() {
  var inputPalavra = document.querySelector("#input-texto");
  inputPalavra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}