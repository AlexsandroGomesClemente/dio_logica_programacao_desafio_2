import { stdin, stdout } from "process";
import readline from "readline";

async function inputSystem(quest) {
  const input = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  return new Promise((resolve) => {
    input.question(quest, (response) => {
      input.close();
      resolve(response);
    });
  });
}

function getMyRank(vitoria, derrotas) {
  const pontosRank = vitoria - derrotas;
  const listRank = [
    "Ferro",
    "Bron+ze",
    "Prata",
    "Ouro",
    "Diamante",
    "Lendário",
    "Imortal",
  ];

  if (pontosRank <= 10) {
    return listRank[0];
  } else if (pontosRank <= 20) {
    return listRank[1];
  } else if (pontosRank <= 50) {
    return listRank[2];
  } else if (pontosRank <= 80) {
    return listRank[3];
  } else if (pontosRank <= 90) {
    return listRank[4];
  } else if (pontosRank <= 100) {
    return listRank[5];
  } else if (pontosRank >= 101) {
    return listRank[6];
  }
}

async function main() {
  const vitoria = await inputSystem("Quantas vitorias seu herói possui? ");
  const derrotas = await inputSystem("Quantas derrotas seu herói possui? ");
  const resultadoDoRank = getMyRank(vitoria, derrotas);
  console.log(
    `O Herói tem de saldo de ${vitoria} está no nível de ${resultadoDoRank}`
  );
}

main();
