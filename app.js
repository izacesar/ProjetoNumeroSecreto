let listDeNumerosSorteados = [];
let numeroDeJogadas = parseInt (prompt(`Informe o números de jogadas`));
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag); //campo está representando o titulo e o paragrafo, e tag está representando o h1 e p
  campo.innerHTML = texto;
}
function mensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela(`p`, `Escolha um número entre 1 e ${numeroDeJogadas} `);
}
mensagemInicial();
    

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Você acertou o número secreto!");
    let mensagemTentativas = `Você acertou o Número Secreto com ${tentativas} ${
      tentativas == 1 ? "tentativa" : "tentativas"
    }`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.querySelector('img').src = './img/trofc3a9u.png';

  } else {
    let palavraMaiorMenor = chute > numeroSecreto ? "menor" : "maior";
    let mensagemMaiorMenor = `O número secreto é ${palavraMaiorMenor}`;
    exibirTextoNaTela("p", mensagemMaiorMenor);
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroSecreto() {
 let numeroEscolhido = parseInt(Math.random() * numeroDeJogadas + 1);

 if (listDeNumerosSorteados.length == numeroDeJogadas){
  listDeNumerosSorteados = [];
 }

 if(listDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroSecreto();
 }
 else{
     listDeNumerosSorteados.push(numeroEscolhido);
     console.log(listDeNumerosSorteados);
     return numeroEscolhido;
 }
    
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroSecreto();
  tentativas = 1;
  limparCampo();
 mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
  document.querySelector('img').src = './img/ia.png';
}

