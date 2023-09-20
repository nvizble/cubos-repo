
let posicao = 0
function solucao(sequencia) {
    for (const indice of sequencia) {
        if (indice === ">") {
            posicao++
        } else {
            posicao--
        }
        if (posicao > 6) {
            posicao = 0
        } else if (posicao < 0) {
            posicao = 6
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
