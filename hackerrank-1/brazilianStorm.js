
let soma = 0
let media = 0

function solucao(notas) {

    for (let i = 0; i < notas.length; i++) {
        for (let j = 0; j < notas.length; j++) {
            notas.sort((i, j) => i - j)

        }
    }
    notas.shift()
    notas.pop()

    for (let d = 0; d < notas.length; d++) {
        soma += notas[d]

    }

    media = soma / notas.length

    console.log(notas)
}

function processData(input) {
    solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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