/** index.js **/

const apiKey = 'CMfvL2xitPf1F2FIidOFMXnUcPe7f3W4';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion.then( resp => {
//     // console.log(resp);
//     // resp.json().then( data => {
//     //     console.log(data);
//     // })
// })
// .catch( console.warn );

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => { // la desestructuracion de la data nos evita poner data.data en el console (en este caso concreto)
        console.log( data.images.original.url );

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    }) // promesas encadenadas (lo que regresa una promesa se le pasa a la siguiente)
    .catch( console.warn );