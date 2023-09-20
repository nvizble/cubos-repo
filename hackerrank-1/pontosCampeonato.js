let pontuacao = 0

function solucao(resultados) {
    for (const jogos of resultados) {
        if (jogos === "V") {
            potuacao += 3
        } else if (jogos === "E") {
            pontuacao += 1
        } else if (jogos === "D") {

        }

    }
    console.log(pontuacao)
}

function processData(input) {
    const resultados = JSON.parse(input);
    solucao(resultados);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});