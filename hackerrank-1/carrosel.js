
let posicao = 0
function solucao(sequencia) {
    for (const indice of sequencia) {
        if (indice === ">") {
            posicao++
        } else {
            posicao--
        }
        if (posicao > 7) {
            posicao = posicao - 7
        } else if (posicao < 1) {
            posicao = posicao + 7
        }

    }
    console.log(posicao)
}
function processData(input) {
    solucao(input);
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
