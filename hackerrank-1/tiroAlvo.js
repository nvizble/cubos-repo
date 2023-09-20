let acertos = []
function solucao(disparos) {
    for (const tiros of disparos) {
        if (tiros >= 70) {
            acertos.push(tiros)
        }

    }
    if (acertos.length < 3) {
        console.log('ELIMINADO')
    } else {
        console.log(acertos.length)

    }
}

function processData(input) {
    solucao(input.split(' ').map(x => Number(x)).filter(x => x));
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