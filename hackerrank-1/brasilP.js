

function solucao(primeiraLetra, segundaLetra, palavras) {
    let quantidadeDePalavras = 0
    for (const letra of palavras) {
        if (letra[0] == primeiraLetra && letra[1] == segundaLetra) {
            console.log(letra)
            quantidadeDePalavras++
        }
    } if (quantidadeDePalavras === 0) {
        console.log('NENHUMA')
    }
}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
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