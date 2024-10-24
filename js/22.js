//optional chainning '?'

const alumno = {
    nombre: 'Juan',
    clase: 'Programacion 1',
    aprobado: true,
    examenes: {
        examen1: 90
    }
}

console.log(alumno.examenes?.examen1)

console.log('despúes de ALUMNO')


//nullish coalescing operator '??'

const pagina = 10 ?? 1
console.log(pagina)