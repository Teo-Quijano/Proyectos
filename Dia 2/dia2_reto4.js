let miSet = new Set()

miSet.add(1);
miSet.add("1");
miSet.add("Saludo");
miSet.add([1,2,3,4,]);

console.log(miSet);
console.log(miSet.size);
console.log(miSet.has(2));
console.log(miSet.delete("1"));