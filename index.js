// NOTAS ANTES DE EMPEZAR:

// en la terminal se puede iniciar el archivo escribiendo "node index.js", se puede poner a prueba escribiendo cualquier otro string o no escribiendo nada.

// se creará el archivo "citas.json", para este caso no se consideró crear el archivo "operaciones.js", puesto a que todo su contenido tendría que haber sido almacenado en una variable en este archivo "index.js", para luego ser creado y enviado su contenido mediante "fs.writeFileSync", por lo que no tendría sentido ya que se encontraría además en index.js, es decir, codigo duplicado.

// los comandos que solicita el desafio en la terminal fueron probados pero no se encuentran agregados, para que puedan ser puestos a prueba tanto al inicio como despues ("node index.js registrar Benito "2 años" perro blanco vomitos" y "node index.js leer")

// se agregaron algunas condiciones extras para evitar romper el codigo, ademas de las condicionales "if" que sugeria el desafio

//gracias


 const fs = require('fs')
 const { registrar, leer } = require('./operaciones.js')

 const argumentos = process.argv.slice(2)
 if(argumentos[0] === undefined || (!fs.existsSync('./citas.json') || !fs.existsSync('./operaciones.js'))){
    console.log("bienvenido, inicializando archivos...")
    fs.writeFileSync("citas.json", "[]")
    return console.log("se creo archivo citas.json")
    }
 if(argumentos[0] === "registrar"){
    return registrar(argumentos[1] , argumentos[2] , argumentos[3] , argumentos[4], argumentos[5])
    }
    if(argumentos[0] === "leer"){
    return leer()
    }
     else {
        console.log("debes ingresar leer o registrar, ej: node index.js leer || node index.js registrar")
    }