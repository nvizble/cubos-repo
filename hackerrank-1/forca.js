
let numeroDeAcertos = 0;
function solucao(palpite, palavra) {
    for (const letra of palavra) {
        if (letra === palpite)
            numeroDeAcertos++

    }
    console.log(numeroDeAcertos)
}

function processData(input) {
    const [palpite, palavra] = input.split(" ");
    solucao(palpite, palavra);
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
