 // agregar 2 funciones, registrar y leer
 const fs = require('fs')

 const registrar = (nombre, edad , tipo , color , enfermedad) => {
         const nuevaCita = {
                            "nombre": nombre,
                            "edad": edad,
                            "tipo": tipo,
                            "color": color,
                            "enfermedad": enfermedad
                            }

         const viejoJson = fs.readFileSync('./citas.json', 'utf8')
         const viejoJsonArray = JSON.parse(viejoJson)
         const nuevoJson =  [    ...viejoJsonArray ,
                                nuevaCita
                            ]
         fs.writeFileSync('citas.json', JSON.stringify(nuevoJson))
 }

  const leer = () => {
     const Mostrar = fs.readFileSync("citas.json", "utf-8")
     console.log(Mostrar)
  }

 module.exports = {registrar , leer}