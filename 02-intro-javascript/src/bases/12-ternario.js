/** index.js **/

const activo = true;

// let mensaje = '';
// if ( !activo ) {
//     mensaje = 'Inactivo';
// } else {
//     mensaje = 'Activo';
// }

const mensaje = (activo) ? 'Activo' : 'Inactivo';
// const mensaje = (!activo) ? 'Activo' : null; // el null si que se ejecuta
console.log(mensaje);

const mensajeSoloSiActivo = !activo && 'Activo'; // permite hacer un if in line donde solo se ejecuta la opcion true
console.log(mensajeSoloSiActivo);