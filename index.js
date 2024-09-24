///////// EJERCICIO 1 /////////

function exampleAsync(valor) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(valor + 1) }, 1000)
    });
}

/*
Resolver la operación de manera que llegue a “10” el valor retornado, tanto con
async/await como con promesas.
*/

//console.log("****** ASYNC / AWAIT ******")
const llegarADiez = async(valor) => {
    let max = 10;
    if (valor < max){
        for (i = valor; i < max; i++){
            valor =+ await exampleAsync(valor);
            console.log(valor)
        }
    } else {
        console.log("numero de entrada demasiado alto")
    }
}

//llegarADiez(1);
/*
console.log("****** PROMESAS ******")
function llegarADiezProm(valor){
    let valorMax = 10
    let nuevoValor;
    if (valor < valorMax){
        for (i = valor; i < valorMax; i++){
            nuevoValor = exampleAsync(valor).then(res => {
                console.log(res, nuevoValor)
            })
            .then(() => {
                exampleAsync(nuevoValor).then(res => console.log(res))
            })
    }}
}
llegarADiezProm(3)*/


///////// EJERCICIO 2 /////////
const piValidValue = 3.14
const piWrongValue = 3.10

/*Crear la función “operation”, que retorne una promesa con un caso de éxito y otro
caso de error según corresponda.*/
const operation = async(valor) => {
    return new Promise((resolve, reject) => {
        if(valor == 3.14){
            resolve("El numero ingresado corresponde a PI")
        } else {
            reject("El numero ingresado no es PI")
        }
    })
}

operation(piValidValue)
.then((res)=> console.log("Válido! ", res))
.catch((err)=> console.log(err))
operation(piWrongValue)
.then((res)=> console.log(res))
.catch((err)=> console.log("No válido! ", err))


///////// EJERCICIO 3 /////////
/*Dado el siguiente bloque de código:
const data =
await fetch("https://restcountries.com/v3.1/name/argentina")
async function countryInformation(data) {
const myCountry = data.json()
console.log("Datos: ", myCountry)
}
countryInformation(data)
Qué modificación debo hacer en el código para que no retorne un objeto “Promise {
<pending> }”?*/

const data = await fetch("https://restcountries.com/v3.1/name/argentina")
async function countryInformation(data) {
    const myCountry = data
    console.log("Datos: ", myCountry)
}
countryInformation(data)