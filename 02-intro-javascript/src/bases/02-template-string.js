
const nombre   = 'Alberto';
const apellido = 'De La Torre';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` Hola Mundo `; // Backtick / Back Quote pueden servir para escribir texto normal. equivalente a " " o ' '
const nombreCompleto2 = `${nombre} ${apellido}`; // es necesario crear una nueva constante ya que a estas no se les puede cambiar el valor
const nombreCompleto3 = `
        ${nombre}
        ${apellido}
    `; // los backtick permiten y recogen (escriben), todos los saltos de linea que se produzcan
const nombreCompleto4 = `${1 + 1}`; // el codigo realiza cualquier operacion que se establezca dentro de las llaves ya que eso es codigo javascript

console.log( nombreCompleto4 );

function getSaludo( nombre ) {
    return `Hola ${nombre}`;
}

console.log( `Este es un texto: ${ getSaludo( nombreCompleto2 ) }`);
