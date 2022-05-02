function numeroReverso() {
  let n = 12;
  let counter = 1;
  for (n; n <= 100; n++) {
    const numberStr = n.toString().split("").reverse();

    const number = parseInt(numberStr[0]);

    if (number != 0) {
      const numberReverse = parseInt(numberStr.join(""));
      const soma = n + numberReverse;
      if (soma % 2 !== 0) {
        console.log(`${counter++} | ${n} + ${numberReverse} = ${soma}`);
      }
    }
  }
}

console.log(numeroReverso());
