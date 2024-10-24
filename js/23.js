//evaluación de corto circuito

const auth =true

if(40) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}

const user ={}
user && console.log('Usuario autenticado')

const auth1 =true
aurh && console.log('Usuario autenticado')