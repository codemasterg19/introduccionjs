const tecnologias = [ 'HTML', 'CSS', 'JavaScript',    'React.js',    'Node.js',]

// // tecnologias[5] = 'Nest.js'

// // tecnologias.push('Nest.js')

// const nuevoArreglo = [...tecnologias, 'Nest.js']

// console.table(tecnologias)
// console.table(nuevoArreglo)


/* eliminar el primer elemento de un arreglo pero lo muta
 tecnologias.shift()
console.table(tecnologias)
 */

/* const tecnologias2 = tecnologias.filter( function(tech){
    // console.log(tech)
    if(tech !== 'HTML'){
        return tech
    }
})
    console.log(tecnologias2)
 */

//modificar cualquier valor en posicion

const tecnologias2 = tecnologias.map( function(tech){
    if (tech === 'Node.js'){
        return 'Nest.js'
    }else {
        return tech
    }
})

console.log(tecnologias2)