
// Desestructuracion
// Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// extraction antigua
console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

// extraction desestructurada con el mismo nombre del campo
const { nombre } = persona;

console.log( nombre );

// extraction desestructurada con un nombre diferente al del campo
const { nombre:variableNombre } = persona;

console.log( variableNombre );

// extraction desestructurada de multiples campos (es independiente del orden)
const { edad, clave } = persona;

console.log( edad );
console.log( clave );

// extraction desestructurada dentro de la funcion
const retornaPersona = ( usuario ) => {
    console.log( usuario );

    const { edad, nombre, clave } = usuario;

    console.log( nombre, clave, edad );
};

retornaPersona( persona );

// extraction desestructurada en los propios argumentos de la funcion
const retornaPersona2 = ( { edad, nombre, clave } ) => {
    console.log( nombre, clave, edad );
};

retornaPersona2( persona );

// extraction desestructurada añadiendo argumentos adicionales no definidos previamente
const retornaPersona3 = ( { edad, nombre, rango = 'Capitan' } ) => {
    console.log( nombre, rango, edad );
};

retornaPersona3( persona );

// extraction desestructurada otorgando valores por defecto a campos en lugar de que estos no lleguen definidos (en caso de que si esten previamente definidos no pierden su valor)
const retornaPersona4 = ( { edad, nombre, clave = 'Capitan' } ) => {
    console.log( nombre, clave, edad );
};

retornaPersona4( persona );

// extraction desestructurada de los datos devueltos por una funcion
const useContext = ( { edad, nombre, clave } ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 13.235,
            lng: 87.429
        }
    }
};

const { nombreClave, anios, latlng:{ lat, lng } } = useContext( persona );

console.log( nombreClave, anios, lat, lng );
