//objetos - deestructuring de dos o mas objetos

const product = {
    name: "Monitor 20 pulgadas",
    price: 300,
    disponible: false
}


const client = {
    name: "Juan",
    premium: true,
    direccion:{
        calle: "av. siempre viva",
    }
}

const {name} = product
const {name: clientName, direccion: {calle}} = client

console.log(name)
console.log(clientName)
