function solucao(precos) {
    let soma = 0;
    for (const preco of precos) {
        soma += preco;
    }

    if (precos.length >= 5) {
        let menorValor = precos[0]
        for (const preco of precos) {
            if (preco < menorValor) {
                menorValor = preco
            }

        }

        console.log(soma - menorValor)
    } else {
        console.log(soma)
    }

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