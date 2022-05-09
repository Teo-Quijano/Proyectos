let textocurso = String("Esta semana comenzo el Bootcamp en Codenotch");

console.log(textocurso.length);

console.log(textocurso[3]);

console.log(textocurso.indexOf(`Codenotch`));

const palabra = `Codenotch` 

console.log(`La palabra "${palabra}" ${textocurso.includes(palabra) ? 'si esta' : 'no esta'} en la frase`);