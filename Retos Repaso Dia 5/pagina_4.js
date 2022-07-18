// Retos de Repaso Dia 5 - Pagina 4

function ordenar (ar) {
     
    let i = 0, j;
     
    while (i < ar.length) {
        j = i + 1;
        while (j < ar.length) {
             
            if (ar[j] < ar[i]) {
                let orden = ar[i];
                ar[i] = ar[j];
                ar[j] = orden;
            }
            j++;
        }
        i++;
    }
}

let t20 = [1, 12, 28, 65, 73, 42, 55, 92, 15, 10, 45, 27, 100];
ordenar(t20)
console.log(t20)

let ovejitas = [
    { nombre: "canela", color: "marron"},
    { nombre: "negrita",  color: "negra"},
    { nombre: "rosa", color: "rosa"},
    { nombre: "flaca", color: "roja"},
    { nombre: "saltarin", color: "roja"}
  ];
  
  function buscar_item_por_id(id){
  
      return ovejitas.find(function(color){
          return color.id === "roja";
      
        });
  }
