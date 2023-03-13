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
    }
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

function jogo(){
    while (!(jogadorScore == 5 || maquinaScore == 5)){
        
    }
}