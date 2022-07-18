// Retos de Repaso Dia 5 - Pagina 4

// function ordenar (ar) {
     
//     let i = 0, j;
     
//     while (i < ar.length) {
//         j = i + 1;
//         while (j < ar.length) {
             
//             if (ar[j] < ar[i]) {
//                 let orden = ar[i];
//                 ar[i] = ar[j];
//                 ar[j] = orden;
//             }
//             j++;
//         }
//         i++;
//     }
// }

// let t20 = [1, 12, 28, 65, 73, 42, 55, 92, 15, 10, 45, 27, 100];
// ordenar(t20)
// console.log(t20)

let ovejitas = [
    { nombre: "canela", color: "marron"},
    { nombre: "negrita",  color: "negra"},
    { nombre: "rosa", color: "rosa"},
    { nombre: "flaca", color: "roja"},
    { nombre: "saltarin", color: "roja"}
  ];
  
      let i = 0
  for (i = 0; i <= ovejitas.length; i++){


    if (ovejitas.color === "roja" && ovejitas.name.includes("n") && ovejitas.name.includes("a")) 
    {
          console.log(ovejitas.color);
    }}

// function checkpassword(a)
// {
// password = a   
//  if (/[!@#$%^&*?_~]{2,}/.test(password) && (/[a-z]{2,}/.test(password) && (/[A-Z]{2,}/.test(password) && (/[0-9]{2,}/.test(password)))))
//  {
//      console.log(true);}

//  else {
//    console.log(false);}

// }
// checkpassword("11aaAA@@")