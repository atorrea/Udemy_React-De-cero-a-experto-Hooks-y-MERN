
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 553221321,
        lat: 14.43738,
        lng: 34.73924,
    }, // la coma final es una buena pactica en javascript
};

console.log( persona ); // se obtiene el objeto completo
console.log( persona.nombre ); // se obtiene un campo del objeto
console.log( { persona } ); // es equivalente a { persona: persona } -> un nuevo objeto al que se le pasa el objeto anterior sobre un campo homonimo al nombre del objeto anterior
console.table( persona ); // muestra el resultado como una tabla

const persona2 = persona; // copia la referencia en memoria de un objeto al otro (siguen siendo el mismo objeto)
persona2.nombre = 'Peter'; // cambia el nombre tanto en persona como en persona2

const persona3 = { ...persona }; // de este modo si que se estaria clonando el objeto
persona3.nombre = 'John'; // unicamente cambia el nombre en persona3

console.log( persona );
console.log( persona2 );
console.log( persona3 );
