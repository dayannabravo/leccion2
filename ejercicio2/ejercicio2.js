/*Ejercicio 2

A a partir del array ages=[15, 45, 50] agregue su edad. 
Usando un for con un if, muestre en pantalla  solo las edades 
mayores a 25 */

let edad=[15,22,45,50];

edad.push(edad);
for(let i= 0; i < edad.length; i++){
    if (edad[i] > 25){
        alert(edad[i]);
    }
}