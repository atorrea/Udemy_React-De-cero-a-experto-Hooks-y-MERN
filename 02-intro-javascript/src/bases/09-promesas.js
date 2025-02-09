/** index.js **/

import { getHeroesByIdSimple } from './bases/08-imp-exp'

const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroesByIdSimple(2);
        console.log(heroe.name);

        // resolve(); // es necesario ejecutar el resolve de la promesa para que se ejecute el Then
        resolve( heroe ); // el resolve puede o no recibir argumentos

        // reject( heroe );
    }, 2000 )
});

// promesa.then( () => {
promesa.then( ( heroe ) => {
    console.log( 'Then de la promesa: ' + heroe.name );
    console.log( 'heroe', heroe );
})
.catch( err => console.warn(err) );


const getHeroeByIdAsync = ( id ) => { // promesa a la que se le pasan argumentos en la llamada
    /* const promesa =*/ return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesByIdSimple( id );

            if ( heroe ) {
                console.log(heroe.name);
                resolve( heroe );
            }

            reject( 'El heroe no existe' );
        }, 2000 )
    });
}

getHeroeByIdAsync( 3 )
    .then( (heroe) => {
        console.log( heroe );
    })
    .catch( err => console.warn(err) );

getHeroeByIdAsync( 30 )
    .then( console.log )
    .catch( console.warn ); // si a la funcion unicamente le llega un argumento y ese va a ser el argumento que se pase a la
                            // siguiente funcion a la que se llama directamente se puede escribir asi