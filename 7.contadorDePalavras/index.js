function solucao(texto) {
  contadorPalavras = 0;
  const palavras = texto.split(" ");
  for (const palavra of palavras) {
    if (palavra !== "") {
      contadorPalavras += 1;
    }
  }
  console.log(contadorPalavras);
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
