/** index.js **/

// const getImagenPromesa = () => new Promise( resolve => resolve('http://dadfafadfa.jpg') ); // promesa normal (mucho mas verbosa)
// getImagenPromesa().then( console.log );

const getImagenPromesa = async() => { // al colocar la palabra reservada async la funcion normal se convierte en una promesa
    return 'http://dadfafadfa.jpg';
}
console.log( getImagenPromesa() );
getImagenPromesa().then( console.log );


const getImagen = async() => { // los await siempre tienen que estar dentro de una funcion async

    try {
        const apiKey = 'CMfvL2xitPf1F2FIidOFMXnUcPe7f3W4';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`); // devuelve una promesa, con el await la recuperamos
        const { data } = await respuesta.json(); // respuesta es una promesa, por lo tanto necesitamos el await para esperar a que retorne

        console.log(data);

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    } catch (error) {
        // manejo del error
        console.error(error);
    }

}
getImagen();