////// EJERCICIO 1 \\\\\\\\\\








 ////// EJERCICIO 2\\\\\\
 
 const list = ['best','company', 'ever'];

 const rokket = (list) => {
 
     let longest = list.reduce((a, b) => {
         return a.length > b.length ? a : b;
     });
 
     return longest;
 }
 
 console.log(rokket(list));




////// EJERCICIO 3 \\\\\

let ejemplo = 'node';
let num = 'asd'
const rokket3 = (ejemplo, cantidad) => {
  
let result = ejemplo.repeat(cantidad);
return result


}
console.log(rokket3(ejemplo, 5))
console.log(rokket3(num, 2))




 /////// EJERCICIO 4 \\\\

 let contacts = [
  {name: 'Juanito', lastname: 'Rokket'},
  {name: 'James', lastname: 'Bond'},
  {name: 'Harry', lastname: 'Potter'},
  ];
const rokket4 = (contacts) => {
 
  let pruebaclient = contacts.map( cliente => {
    return cliente.lastname;
    });
    return pruebaclient;
    
}
console.log(rokket4(contacts))




/////// EJERCICIO 5 \\\\



const rokket5 = (num1, num2) => {
  let concatenados = [... num1, ... num2];
  let unicos = [...new Set(concatenados)];
  return unicos;
}

console.log(rokket5([1,2,5], [2,1,6]));
console.log(rokket5([1,2,3], [4,5,6]));


