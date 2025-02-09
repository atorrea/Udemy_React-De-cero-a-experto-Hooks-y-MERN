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
//     {
//         id: 3,
//         name: 'Superman',
//         owner: 'DC'
//     },
//     {
//         id: 4,
//         name: 'Flash',
//         owner: 'DC'
//     },
//     {
//         id: 5,
//         name: 'Wolverine',
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

// export const owners = [ 'DC', 'Marvel' ];
// export default heroes; // exportacion por defecto y de un objeto normal realizadas por separado

const owners = [ 'DC', 'Marvel' ];
export {
    heroes as default,
    owners
}