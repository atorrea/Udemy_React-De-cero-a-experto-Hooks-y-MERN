
const personajes = ['Goku','Vegeta','Trunks'];

console.log( personajes );
console.log( personajes[0] );
console.log( personajes[1] );
console.log( personajes[2] );


const [ p1 ] = personajes;
const [ , p2 ] = personajes;
const [ , , p3 ] = personajes;
const [ personaje1, personaje2, personaje3 ] = personajes;

console.log( p1 );
console.log( p2 );
console.log( p3 );
console.log( personaje1 + ' ' + personaje2 + ' ' + personaje3 );


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();

console.log( letras, numeros );


const useState = ( valor ) => {
    return [ valor, ()=>{ console.log( 'Hola Mundo' )} ];
}

const arr = useState( 'Goku' );

arr[1](); // Sintaxis recuperacion de una funcion de un arreglo y llamada a la misma a traves de los parentesis

const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre(); // Sintaxis llamada a la funcion desestructurada
