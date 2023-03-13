let jogadorScore = 0
let maquinaScore = 0
let vencedor = ''

function jogaRound(escolhaJogador, escolhaMaquina){
    if(escolhaJogador == escolhaMaquina){
        vencedor = 'empate';
    }
    else if (
        (escolhaJogador == 'PEDRA' && escolhaMaquina == 'TESOURA') || 
        (escolhaJogador == 'PAPEL' && escolhaMaquina == 'PEDRA') || 
        (escolhaJogador == 'TESOURA' && escolhaMaquina == 'PAPEL')
    ){
        vencedor = 'jogador';
        jogadorScore ++;
    }
    else if (
        (escolhaMaquina == 'PEDRA' && escolhaJogador == 'TESOURA') || 
        (escolhaMaquina == 'PAPEL' && escolhaJogador == 'PEDRA') || 
        (escolhaMaquina == 'TESOURA' && escolhaJogador == 'PAPEL')
    ){
        vencedor = 'maquina';
        maquinaScore ++;
    }else{
        console.log('erro');
    }

    atualizarPlacar(vencedor, escolhaJogador, escolhaMaquina);
}

function gerarEscolhaMaquina (){
    let aleatorio = Math.floor(Math.random() * 3)
    switch (aleatorio) {
        case 0:
        return 'PEDRA'
        case 1:
        return 'PAPEL'
        case 2:
        return 'TESOURA'
    }
}

let acabouOJogo = () => jogadorScore == 5 || maquinaScore == 5;

const placarJogador = document.getElementById('scoreJogador');
const simboloJogador = document.getElementById('simboloJogador');
const placarMaquina = document.getElementById('scoreMaquina');
const simboloMaquina = document.getElementById('simboloMaquina');
const infoJogo = document.getElementById('infoDeJogo');
const msgJogo = document.getElementById('mensagemDeJogo');
const btPedra = document.getElementById('botaoPedra');
const btPapel = document.getElementById('botaoPapel');
const btTesoura = document.getElementById('botaoTesoura');
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')


btPedra.addEventListener('click', () => handleClick('PEDRA'));
btPapel.addEventListener('click', () => handleClick('PAPEL'));
btTesoura.addEventListener('click', () => handleClick('TESOURA'));
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(escolhaJ){
    if (acabouOJogo()) {
        openEndgameModal()
        return
    }

    let escolhaPc = gerarEscolhaMaquina();
    jogaRound(escolhaJ, escolhaPc);

    if (acabouOJogo()) {
        openEndgameModal()
        setFinalMessage()
    }
}

function atualizarPlacar (vencedor, escolhaJ, escolhaM){
    if(vencedor == 'jogador'){
        infoJogo.textContent = 'Você Venceu!';
        msgJogo.textContent = `${escolhaJ.toLowerCase()} ganha de ${escolhaM.toLowerCase()}`
    }else if(vencedor =='maquina'){
        infoJogo.textContent = 'Você Perdeu.';
        msgJogo.textContent = `${escolhaJ.toLowerCase()} perde de ${escolhaM.toLowerCase()}`
    }else{
        infoJogo.textContent = 'Empate!';
        msgJogo.textContent = `${escolhaJ.toLowerCase()} empata com ${escolhaM.toLowerCase()}`
    }

    placarJogador.textContent = `Jogador: ${jogadorScore}`;
    placarMaquina.textContent = `Maquina: ${maquinaScore}`;

    switch (escolhaJ) {
        case 'PEDRA':
        simboloJogador.textContent = '✊'
        break
        case 'PAPEL':
        simboloJogador.textContent = '✋'
        break
        case 'TESOURA':
        simboloJogador.textContent = '✌'
        break
    }

    switch (escolhaM) {
        case 'PEDRA':
        simboloMaquina.textContent = '✊'
        break
        case 'PAPEL':
        simboloMaquina.textContent = '✋'
        break
        case 'TESOURA':
        simboloMaquina.textContent = '✌'
        break
    }
}

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function closeEndgameModal() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

function setFinalMessage() {
  return jogadorScore > maquinaScore
    ? (endgameMsg.textContent = 'Você venceu!')
    : (endgameMsg.textContent = 'Você perdeu...')
}

function restartGame() {
  jogadorScore = 0
  maquinaScore = 0
  infoJogo.textContent = 'Escolha sua jogada'
  msgJogo.textContent = 'O primeiro a marcar 5 pontos vence'
  placarJogador.textContent = 'Jogador: 0'
  placarMaquina.textContent = 'Computador: 0'
  simboloJogador.textContent = '❔'
  simboloMaquina.textContent = '❔'
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

