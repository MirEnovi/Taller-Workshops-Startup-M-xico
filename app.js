
// guardamos en variable "d" llamado del DOM para el id de etiqueta Canvas
var d = document.getElementById('draw-canvas');
// en variable lienzo guardamos el resultado de poner el metodo getContext de canvas a nuestro id, con el parametro 2d.
var lienzo = d.getContext('2d');

console.log(lienzo);

// // beginPath() es un metodo de canvas que permite dibujar un trazo
// lienzo.beginPath(); // arrancamos
// // Esta es una propiedad (atributo)
// lienzo.strokeStyle = 'red'; // decidimos estilo
// // moveTo es un metodo de canvas (función)para mover el lapiz
// lienzo.moveTo(100, 100);
// // lineTo, es el metodo para trazar una linea
// lienzo.lineTo(200, 200);
// // stroke metodo para asignar el estilo guardado en la propiedad strokeStyle
// lienzo.stroke();
// // Cerramos la linea con el metrodo closePath
// lienzo.closePath(); // terminan






/* CREEMOS UNA FUNCIÓN*/

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal) {
	lienzo.beginPath(); // arrancamos
	lienzo.strokeStyle = color; // decidimos estilo
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath(); // terminan
}

// dibujamos lineas ejes 
dibujarLineas('#15181a', 1, 1, 1, 299);
dibujarLineas('#15181a', 1, 299, 299, 299);

dibujarLineas('#15181a', 1, 1, 299, 1);
dibujarLineas('#15181a', 299, 299, 299, 1);








/* CREEMOS UN CICLO */

var lineas = 30;

// for (let i = 0; i < lineas; i++) {
// 	dibujarLineas('#095394', 0, (i*10), ((i+1)*10), 300);
// }

for (let i = 10; i < 300; i=i+10) {
	dibujarLineas('#095394', 0, i, (i+10), 300);
}

/* INVIRTIENDO EL CANVAS*/

for (let i = 10; i < 300; i=i+10) {
	dibujarLineas('#095394', 300, i, (i+10), 0);
}
