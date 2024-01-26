// Escribe tu código aquí.

function palabraLarga(str, array) {
    return array.filter(word => word.length > str.length); //filter para iterar entre los elementos del array
}

const animales = ["Perro", "Gato", "Tigre", "León", "Mapache", "Rana"];
const palabra = palabraLarga("animal", animales);
console.log(palabra);

