
let nomeHeroi = "Légolas da Mira Torta";
let nivelHeroi = "";
let saldoDeVitorias = calculadora(100, 19);

// função que calcula saldo de vitórias
function calculadora(numVitorias, numDerrotas){
    somatorio = numVitorias - numDerrotas;
    return somatorio;
}

// estrutura de escolha que seleciona o rank do herói com base no saldo de vitórias
switch(true){
    case saldoDeVitorias <= 10:
        nivelHeroi = "Ferro";
    break;

    case saldoDeVitorias > 10 && saldoDeVitorias <= 20:
        nivelHeroi = "Bronze";
    break;

    case saldoDeVitorias > 20 && saldoDeVitorias <= 50:
        nivelHeroi = "Prata";
    break;

    case saldoDeVitorias > 50 && saldoDeVitorias <= 80:
        nivelHeroi = "Ouro";
    break;

    case saldoDeVitorias > 80 && saldoDeVitorias <= 90:
        nivelHeroi = "Diamante";
    break;

    case saldoDeVitorias > 90 && saldoDeVitorias <= 100:
        nivelHeroi = "Lendário";
    break;

    case saldoDeVitorias > 100:
        nivelHeroi = "Imortal";
    break;

    default:
        nivelHeroi = "Não foi possível calcular o seu Rank atual.";
}

// resultado
console.log("O herói de nome " + nomeHeroi + " tem um saldo de " + saldoDeVitorias + " vitórias e está no rank " + nivelHeroi +".");