//Ejercicio 1, algoritmo 2
//1. Leer el nombre, la edad y el peso de una persona y posteriormente imprimirlas.

function Persona (usuario) {
     
     return `Hola tu nombre es ${usuario.nombre} tu edad es: ${usuario.edad} y pesas  ${usuario.peso}`;
}
var usuario = [ {nombre: "Mariana", edad: 5, peso: 15 },
                {nombre: 'Johanna', edad:32, peso: 65 },
                {nombre: 'Alexander', edad:14, peso: 48 },

];
console.log(Persona(usuario[2]));