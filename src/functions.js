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

// Requisito 6 - Crie a função somatorio

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
