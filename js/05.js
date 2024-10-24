//objetos - manipulaciòn

const product = {
    name: "Monitor 20 pulgadas",
    price: 300,
    disponible: false
}

//Object.freeze(product) no permite modificar el objeto

//Object.seal(product)  // permite modificar pero no eliminar ni añadir

//Reescribir un valor
product.disponible = true


//sino existe, lo va a añadir
product.imagen = 'imagen.jpg'

//eliminar una propiedad del objeto
delete product.price



console.log(product)