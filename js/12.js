const tecnologias = [ 'HTML', 'CSS', 'JavaScript',    'React.js',    'Node.js', 'Nest.js', 'TypeScript']
/* 
for (let i = 0; i < tecnologias.length; i++) {
    console.log(tecnologias[i])
}

 */

//Foreach
tecnologias.forEach(function(tech){
    console.log(tech)
})

//map
const arrayMap = tecnologias.map(function(tech){
    return tech + "Hola"
})

console.log(arrayMap)

//for ... of

for(let tech of tecnologias){
    console.log(tech)

}

// console.log(tecnologias)