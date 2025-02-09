# <font color="red">Sección 1: Introducción</font>
## <font color="yellow">1. Introducción al curso</font>

## <font color="yellow">2. ¿Cómo funcionará el curso?</font>

## <font color="yellow">3. ¿Cómo hacer preguntas?</font>

## <font color="yellow">4. Instalaciones necesarias y recomendadas</font>
### **Instalaciones Necesarias**
- [Google Chrome](https://www.google.com/chrome/)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es&authuser=1)
- [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/downloads/)
- [Mongo Compass](https://www.mongodb.com/try/download/compass)
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/es/)
### **Extensiones de VSCode**
- [Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)
- **Configuración del Bracket Pair Colorizer 2**
    [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
    ```
    "bracket-pair-colorizer-2.colors": [
        "#fafafa",
        "#9F51B6",
        "#F7C244",
        "#F07850",
        "#9CDD29",
        "#C497D4"
    ],
    ```
- **Tema en VSCode:**
    - [Monokai Night](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-monokai-night)
    - [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- **Instalaciones recomendadas sobre React**
    - [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
    - [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
    - [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

# <font color="red">Sección 2: Introducción a React y conceptos generales</font>
## <font color="yellow">5. Introducción a la sección</font>

## <font color="yellow">6. Temas puntuales de la sección</font>

**¿Qué aprenderemos en esta sección?**

- ¿Qué es React?
- Conceptos generales
- Babel
- JSX

Daremos nuestros primeros pasos y una pequeña aplicación que nos ayudará a perderle el miedo a React rápidamente

## <font color="yellow">7. ¿Qué es React?</font>

Librería JS para crear aplicaciones.

Declarativa.

Eficiente.

Predecible (todo fluye en una sola vía).

Componentes: piezas de código encapsuladas que pueden tener estado (permite dividir una aplicación muy grande).

Server-side con Node.

Aplicaciones móviles con React Native.

```jsx
// Aplicacion en React mas sencilla posible
// JSX = JS + XML

const divRoot = document.querySelector('#root'); // se hace referencia a un div con id="root"
ReactDOM.render( <h1>Hola Mundo</h1> , divRoot ); // inyecta un html dentro de la etiqueta referenciada

//cont h1Tag = <h1>Hola Mundo</h1>; // variable/contante que contiene la etiqueta
//ReactDOM.render( h1Tag, divRoot ); // llama a una funcion de React para mostrar la "algo" en el html

//const h1Tag = document.createElement('h1', null, `Hola, soy ${ nombre }`);
    // version similar al hola mundo escrito en JSX (en React se simplifica usando simples etiquetas)
```

## <font color="yellow">8. Primeros pasos en React</font>

Primera aplicación completa con React:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- Cargat React -->
    <script crossorigin src="<https://unpkg.com/react@16/umd/react.production.min.js>"></script>
    <script crossorigin src="<https://unpkg.com/react-dom@16/umd/react-dom.production.min.js>"></script>
    <!-- Importacion de babel (permite convertir javascript moderno a javascript comprensible por el navegador) -->
    <script src="<https://unpkg.com/babel-standalone@6/babel.min.js>"></script>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ReactApp</title>
</head>
<body>

    <div id="root"></div>

    <script type="text/babel">

        const divRoot = document.querySelector('#root');

        const nombre = 'Alberto';
        const h1Tag = <h1>Hola Mundo, soy { nombre }!</h1>;

        ReactDOM.render( h1Tag, divRoot );

    </script>
    
</body>
</html>
```

## <font color="yellow">9. Introducción a Babel</font>

Babel: permite usar las últimas innovaciones del ECMAScript en cualquier navegador aunque este no soporte aun estas mejoras (incompatibilidad).

- [https://babeljs.io/](https://babeljs.io/)

![babel](./media/Untitled.png)

# <font color="red">Sección 3: Introducción a JavaScript moderno</font>

## <font color="yellow">10. Introducción a la sección</font>

Tema fundamental: desestructuración

## <font color="yellow">11. Temas puntuales de la sección</font>

### **¿Temas de la sección?**

- Generar la base sobre JavaScript
- Constantes y variables Let
- Template String
- Objetos literales
- Arreglos
- Desestructruación * (sumamente importante)
- Promesas
- Fetch API
- Ternarios
- Async - Await

El objetivo es tener las bases que permitan diferenciar fácilmente qué es propio de React y qué es propio de JavaScript.

Estos conceptos y ejercicios ayudarán a suavizar la curva de aprendizaje de React.

## <font color="yellow">12. Inicio de proyecto - Bases de JavaScript</font>

<mark class="orange">Al intentar crear un proyecto con CRA actualmente se encuentra un error por incompatibilidad entre dependencias. Esta ya no es una forma recomendada de crear aplicaciones de React por lo cual se recomienda [**hacer uso de Vite**](https://vite.dev/guide/).</mark>

<mark class="orange">Es posible crear el proyecto usando el template de vanilla JavaScript, pues no se usará React hasta la próxima sección.</mark>

1. Comprobar versión de npx (en caso de que no se reconozca el comando instalar node):
    - npx --version
2. Posicionarse sobre la carpeta general del proyecto:
    - cd "C:\Users\delat\Desktop\UDEMY\JS\REACT\1. React - De cero a experto ( Hooks y MERN )”
3. Crear la nueva aplicación (02-intro-javascript):
    - npx create-react-app 02-intro-javascript
    - [https://create-react-app.dev/](https://create-react-app.dev/)
4. Abrir la nueva carpeta en Visual Studio Code
5. Desplazarse hasta la nueva carpeta del proyecto:
    - cd 02-intro-javascript
6. Ejecutar el comando que inicializa el proyecto:
    - npm start
    - También → yarn start
7. React buscará el archivo index.js e iniciará la aplicación desde ahí
8. En las nuevas versiones de React la página no se recarga automáticamente cada vez que se salva:
    - [https://github.com/facebook/create-react-app/issues/9904#issuecomment-735223010](https://github.com/facebook/create-react-app/issues/9904#issuecomment-735223010)
    - Es necesario crear un archivo .env sobre la raiz del proyecto y escribir en él: FAST_REFRESH=false
    - Ejecutar de nuevo en la consola sobre la carpeta del proyecto: npm start

## <font color="yellow">13. Variables y constantes</font>

No se debe usar var, únicamente let y const

Tanto let como const únicamente funcionan dentro de su scope

```jsx
// Variables y constantes
    // No usar var, unicamente const y let
    const nombre = 'Alberto';
    const apellido = 'De La Torre';

    let valorDado = 5;
    valorDado = 4;

    console.log( nombre, apellido, valorDado );

    if ( true ) {
        let valorDado = 6; // no es el mismo valorDado que existe fuera (diferente scope)

        console.log( valorDado );
    }

    console.log( valorDado );
```

## <font color="yellow">14. Template String</font>

Uso de Backtick / Back Quote → : permiten añadir código javascript mediante ${ }

```jsx
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
```

## <font color="yellow">15. Objetos lilterales</font>

Copia de un objeto anterior sobre un nuevo objeto al que se le pasa el objeto anterior sobre un campo homonimo al nombre del objeto anterior:

- { nombreObjetoAnterior }

Clonación de un objeto → Operador Spread:

- { ...nombreObjetoAnterior }

```jsx
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
```

## <font color="yellow">16. Arreglos</font>

Ejecutar funciones sobre todos los elementos de un array → **Array.prototype.map():** [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```jsx
// Arreglos en JS

// const arreglo = new Array(); // forma no recomendada a menos que se quiera crear un arreglo con un numero inicial de posiciones
                                // new Array( 100 ); -> incluso asi el arreglo seguiria siendo ampiable -> arreglo.push(1)

const arreglo = [];             // equivalente a -> const arreglo = [1,2,3,4];
arreglo.push(1);                // no recomendable usar push ya que modifica el objeto principal (usar spread)
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);

// let arreglo2 = arreglo;      // copia la direccion en memoria
// arreglo.push(5);

let arreglo2 = [ ...arreglo, 5 ]; // forma correcta de copiar los valores de un arreglo a otro y adicionar nuevos valores -> operador Spread

console.log( arreglo );
console.log( arreglo2 );

const arreglo3 = arreglo2.map( function ( valorPosicion ) { // la funcion del prototype map fuerza la creacion de un nuevo arreglo
    return valorPosicion * 2;
});

console.log( arreglo3 );
```

## <font color="yellow">17. Funciones</font>

```jsx
// Funciones en JS
function saludar( nombre ) { // No crear funciones de esta manera, pueden ser sustituidas por un valor a posteriori
    return `Hola, ${ nombre }`;
}

saludar = 30

console.log( saludar );

const saludar2 = function( nombre ) { // Usar siempre este metodo para crear funciones -> impide reescritura
    return `Hola, ${ nombre }`;
}

console.log( saludar2( 'Mundo' ) );

// Convertir una funcion normal a una funcion lambda (una funcion flecha)
const saludar3 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

console.log( saludar3( 'Mundo' ) );

// Cuando solo hay un return dentro de la funcion lambda esta se puede simplificar
const saludar4 = ( nombre ) => `Hola, ${ nombre }`;

console.log( saludar4( 'Mundo' ) );

// Cuando la funcion no tiene argumentos
const saludar5 = () => `Hola, Mundo`;

console.log( saludar5() );

// En el caso de que una lambda devuelva un objeto
const saludar6 = () => {
    return {
        uid: 'nombreUsuario',
        password: 'claveUsuario'
    }
};

console.log( saludar6() );

// En el caso de que una lambda devuelva un objeto ->
    // para simplificar la funcion es necesario poner parentesis para que se distinga la diferencia entre el cuerpo de la funcion y el objeto
const saludar7 = () => ({
    uid: 'nombreUsuario',
    password: 'claveUsuario'
});

console.log( saludar7() );
```

## <font color="yellow">18. Desestructuación de Objetos</font>

Documentación desestructuración: [](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)[https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignmen](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignmen)

```jsx
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

// extraction desestructurada otorgando valores por defecto a campos en lugar de que estos no lleguen definidos
// (en caso de que si esten previamente definidos no pierden su valor)
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
```

## <font color="yellow">19. Desestructuación de Arreglos</font>

```jsx
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
    return [ valor, () => { console.log( 'Hola Mundo' ) } ];
}

const arr = useState( 'Goku' );

arr[1](); // Sintaxis recuperacion de una funcion de un arreglo y llamada a la misma a traves de los parentesis

const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre(); // Sintaxis llamada a la funcion desestructurada
```

## <font color="yellow">20. Import, export y funciones comunes de arreglos</font>

```jsx
/** data/heroes.js **/

export const heroes = [ // Es necesario exprotar el archivo para poder importarlo
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
```

```jsx
/** index.js **/

// import { heroes } from './data/heroes'; // En la ruta tambien se puede poner la extension del archivo pero eso normalmente nadie lo hace
import { heroes } from './data/heroes' // imp + tab permite escribir automaticamente los imports

console.log( heroes );

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

const getHeroesByIdSimple = ( id ) => heroes.find( element => element.id === id ); // obtencion elemento unico

console.log( getHeroesByIdVerbosa( 4 ) );
console.log( getHeroesById( 2 ) );
console.log( getHeroesByIdSimple( 5 ) );

const getHeroesByOwner = ( owner ) => heroes.filter( element => element.owner === owner ); // obtencion multiples elementos

console.log( getHeroesByOwner( 'DC' ) );
console.log( getHeroesByOwner( 'Marvel' ) );
```

## <font color="yellow">21. Múltiples exportaciones y exportaciones por defecto</font>

Tres modos de exportación por defecto:

- export default [...];
- const nombreElemento = [...]; export default nombreElemento;
- const nombreElemento = [...]; export { nombreElemento as default };

```jsx
/** data/heroes.js **/

// export default [ // Formato de la exportacion por defecto
//     {
//         id: 1,
//         name: 'Batman',
//         owner: 'DC'
//     },
//     {
//         id: 2,
//         name: 'Spiderman',
//         owner: 'Marvel'
//     },
// ];

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
];

// export const owners = [ 'DC', 'Marvel' ];
// export default heroes; // exportacion por defecto y de un objeto normal realizadas por separado

const owners = [ 'DC', 'Marvel' ];
export {
    heroes as default,
    owners
}
```

```jsx
/** index.js **/

// import heroes from './data/heroes' // sin llaves obtiene la exportacion por defecto estableciendole el nombre en el momento de la recogida
import heroes, { owners } from './data/heroes' // importacion de un objeto por defecto y uno normal del mismo archivo, el normal es necesario desestructurarlo igualmente

console.log( heroes );
console.log( owners );
```

## <font color="yellow">22. Promesas</font>

const promesa = new Promise(); // código básico de una promesa

Las promesas se ejecutan después de todos los elementos síncronos.

Las promesas se crean con un callback con 2 argumentos: resolve y reject

A la hora de realizar alguna acción en función del resultado de la promesa existen los típicos métodos then, catch y finally

```jsx
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
```

## <font color="yellow">23. Fetch API</font>

Fetch es el nombre de una nueva API para Javascript con la cuál podemos realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verboso. La forma de realizar una petición es muy sencilla, básicamente se trata de llamar a fetch y pasarle por parámetro la URL de la petición a realizar.

```jsx
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
```

## <font color="yellow">24. Async - Await</font>

```jsx
/** index.js **/

// const getImagenPromesa = () => new Promise( resolve => resolve('<http://dadfafadfa.jpg>') ); // promesa normal (mucho mas verbosa)
// getImagenPromesa().then( console.log );

const getImagenPromesa = async() => { // al colocar la palabra reservada async la funcion normal se convierte en una promesa
    return '<http://dadfafadfa.jpg>';
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
```

## <font color="yellow">25. Operador condicional ternario</font>

```jsx
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
```

## <font color="yellow">26. Nota sobre JavaScript</font>

Consultar posibles dudas → [https://developer.mozilla.org/es/](https://developer.mozilla.org/es/)

## <font color="yellow">27. Código fuente de la sección</font>

Repositorio con el código fuente de la sección: [https://github.com/Klerith/react-intro-javascript](https://github.com/Klerith/react-intro-javascript)