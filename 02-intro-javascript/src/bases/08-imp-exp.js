/** index.js **/

// import { heroes } from './data/heroes'; // En la ruta tambien se puede poner la extension del archivo pero eso normalmente nadie lo hace
// import { heroes } from './data/heroes' // imp + tab permite escribir automaticamente los imports
// import heroes from './data/heroes' // sin llaves obtiene la exportacion por defecto estableciendole el nombre en el momento de la recogida
import heroes, { owners } from '../data/heroes' // importacion de un objeto por defecto y uno normal del mismo archivo, el normal es necesario desestructurarlo igualmente

console.log( heroes );
console.log( owners );

const getHeroesByIdVerbosa = ( id ) => {
    return heroes.find( ( heroe ) => {
        if ( heroe.id === id ) {
            return true;
        } else {
            return false;
        }
    } );
}

const getHeroesById = ( id ) => {
    return heroes.find( ( element ) => element.id === id );
}

export const getHeroesByIdSimple = ( id ) => heroes.find( element => element.id === id ); // obtencion elemento unico

console.log( getHeroesByIdVerbosa( 4 ) );
console.log( getHeroesById( 2 ) );
console.log( getHeroesByIdSimple( 5 ) );

const getHeroesByOwner = ( owner ) => heroes.filter( element => element.owner === owner ); // obtencion multiples elementos

console.log( getHeroesByOwner( 'DC' ) );
console.log( getHeroesByOwner( 'Marvel' ) );