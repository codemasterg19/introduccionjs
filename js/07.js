//objetos - unir 

const product = {
    name: "Monitor 20 pulgadas",
    price: 300,
    disponible: false
}


const client = {
    name: "Juan",
    premium: true,

}

// const carrito = {
//     cantidad: 1,
//     ...product //spread operator
// }

// console.log(carrito)

const nuevoObjeto ={
    ...product, //{...product},
    ...client// {...client}
}

console.log(nuevoObjeto)

const nuevoObjeto2 = Object.assign(product, client)

console.log(nuevoObjeto2)