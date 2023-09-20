
function solucao(precos) {
    let perdas = []
    let prejuizo = 0
    for (let i = 0; i < precos.length; i++) {
        for (let j = i + 1; j < precos.length; j++) {
            if (precos[0] > precos[i]) {
                prejuizo = precos[0] - precos[i]
                perdas.push(prejuizo)
            }
        }
    }
    console.log(Math.min(...perdas))
}

function processData(input) {
    const precos = input.split(" ").map(x => parseInt(x));
    solucao(precos);
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