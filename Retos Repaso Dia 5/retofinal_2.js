// Retos Repaso - Reto Final 2

let numeros1 = [
    [1,2,3,4,5,6,7,8,9,10],
    [2,4,6,8,10,12,14,16,18,20],
    [1,3,5,7,9,11,13,15,17,19],
    [1,2,3,4,5,6,7,8,9,10],
    [2,4,6,8,10,12,14,16,18,20],
    [1,3,5,7,9,11,13,15,17,19],
    [1,2,3,4,5,6,7,8,9,10],
    [2,4,6,8,10,12,14,16,18,20],
    [1,3,5,7,9,11,13,15,17,19],
    [1,3,5,7,9,11,13,15,17,19],
    ];
    
    let numeros2 = [
    [1,2,3,4,5,6,7,8,9,10],
    [2,4,6,8,10,12,14,16,18,20],
    [1,3,5,7,9,11,13,15,17,19],
    [1,2,3,4,5,6,7,8,9,10],
    [2,4,6,8,10,12,14,16,18,20],
    [1,3,5,7,9,11,13,15,17,19],
    [1,2,3,4,5,6,7,8,9,10],
    [2,4,6,8,10,12,14,16,18,20],
    [1,3,5,7,9,11,13,15,17,19],
    [1,3,5,7,9,11,13,15,17,19],
    ];
    
      let resultado = 0;
        for (var i = 0; i < numeros1.length; i++) {
          resultado= numeros1[i] + numeros2[i];
    
          console.log(resultado);
        }