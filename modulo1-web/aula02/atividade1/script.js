// Nome do jogador
const nomeJogador = "Ana Laura";

// Idade do jogador
let idade = 18;

// Status online
let online = true;

// Jogo favorito
const jogoFavorito = {
    nome: "Valorant",
    anoLancamento: 2020
};

// Últimas 3 pontuações
const pontuacoes = [850, 920, 780];

// Mostrando os valores e seus tipos
console.log("Nome:", nomeJogador);
console.log("Tipo:", typeof nomeJogador);

console.log("Idade:", idade);
console.log("Tipo:", typeof idade);

console.log("Online:", online);
console.log("Tipo:", typeof online);

console.log("Jogo favorito:", jogoFavorito);
console.log("Tipo:", typeof jogoFavorito);

console.log("Pontuações:", pontuacoes);
console.log("Tipo:", typeof pontuacoes);

// Alterando a idade
idade = 16;

// Alterando o status online
online = false;

console.log("Nova idade:", idade);
console.log("Novo status online:", online);

// A constante nomeJogador não pode ser alterada
// nomeJogador = "Maria"; // Isso causaria um erro

// Desafio extra: média das pontuações
const media = (pontuacoes[0] + pontuacoes[1] + pontuacoes[2]) / 3;

console.log(`A média de pontos do jogador ${nomeJogador} foi: ${media}`);