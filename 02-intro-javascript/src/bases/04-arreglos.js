
// Arreglos en JS

// const arreglo = new Array(); // forma no recomendada a menos que se quiera crear un arreglo con un numero inicial de posiciones
                                // new Array( 100 ); -> incluso asi el arreglo seguiria siendo ampiable -> arreglo.push(1)

const arreglo = [];             // equivalente a -> const arreglo = [1,2,3,4];
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);

// let arreglo2 = arreglo;      // copia la direccion en memoria
// arreglo.push(5);

let arreglo2 = [ ...arreglo, 5 ]; // forma correcta de copiar los valores de un arreglo a otro y adicionar nuevos valores -> operador Spread

console.log( arreglo );
console.log( arreglo2 );

const arreglo3 = arreglo2.map( function ( valorPosicion ) {
    return valorPosicion * 2;
});

console.log( arreglo3 );
