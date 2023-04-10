// Requisito 1 - Crie a função verificaPalindromo
  function verificaPalindromo(frase) {
    let reverse = frase.split('').reverse().join('');
    if (reverse === frase) {
      return true;
    } else {
      return false;
    }
  }

  console.log(verificaPalindromo('arara'));
  console.log(verificaPalindromo('desenvolvimento'));

// Requisito 2 - Crie a função indiceDoMaior
  function indiceDoMaior(numbers) {
    let indiceDoMaior = 0;
    for (let indice in numbers) {
      if (numbers[indiceDoMaior] < numbers[indice]){
        indiceDoMaior = Number(indice);
      }
    }
    return indiceDoMaior;
  }

  console.log([2, 3, 6, 7, 10, 1]);
  console.log([9, 1, 3, 5, 7]);
// Requisito 3 - Crie a função indiceDoMenor
  function indiceDoMenor(numbers) {
    let indiceDoMenor = 0;
    for (let indice in numbers) {
      if (numbers[indiceDoMenor] > numbers[indice]){
        indiceDoMenor = Number(indice);
      }
    }
    return indiceDoMenor;
  }

  console.log([2, 3, 6, 7, 10, 1]);
  console.log([2, 4, 6, 7, 10, 0, -3]);
// Requisito 4 - Crie a função maiorPalavra
  function maiorPalavra(words) {
    let maior = words[0];
    for (let indice in words) {
      if (maior.length < words[indice].length) {
        maior = words[indice];
      }
    }
  return maior;
  }

  console.log(maiorPalavra['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
  console.log(maiorPalavra['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix']);
// Requisito 5 - Crie a função maisRepetido
  function repeticoesPorNumero(numbers) {
    let num = {};
    for (let index = 0; index < numbers.length; index += 1) {
      let valor = numbers[index];
      if (num[valor] === undefined) {
        num[valor] = 1;
      } else {
        num[valor] += 1;

      }
    }
    return num;
  }

  function maisRepetido(numbers) {
    let num = repeticoesPorNumero(numbers);
    let repetido = 0;
    let numero = 0;
    for (let prop in num) {
      if (repetido < num[prop]) {
        repetido = num[prop]; 
        numero = Number(prop);     
      }
    }
    return numero;
  }

  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
  console.log(maisRepetido([2, 3, -2, 3, -2, 2, 3]));
// Requisito 6 - Crie a função somatorio
  function somatorio(numbers) {
    if (numbers < 0) return 'ERRO';
    let soma = 0;
    for (let index = 1; index <= numbers; index += 1) {
      soma += index;
    }
    return soma;
  }

  console.log(somatorio[5]);
  console.log(somatorio[1]);
  console.log(somatorio[-7]);
// Requisito 7 - Crie a função verificaFimPalavra

// Não modifique essas linhas
module.exports = {
  verificaPalindromo: typeof verificaPalindromo === 'function' ? verificaPalindromo : (() => {}),
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : (() => {}),
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : (() => {}),
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : (() => {}),
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : (() => {}),
  somatorio: typeof somatorio === 'function' ? somatorio : (() => {}),
  verificaFimPalavra: typeof verificaFimPalavra === 'function' ? verificaFimPalavra : (() => {}),
};
