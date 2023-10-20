import fs from 'fs'
import { sep } from 'path'

let ruta = process.cwd() + "\\package.json"

let info
fs.readFile(ruta, 'utf-8', (error, datos) => {
    try {
        if(error) throw Error(`Error en lectura de archivo: ${error.message}`)
    var stats = fs.statSync(ruta)

    info = {
        contenidoStr : JSON.stringify(JSON.parse(datos)),
        contenidoObj : JSON.parse(datos),
        size : stats.size
    }
    console.log(info)

    let rutaTest = process.cwd() + "\\textTest.txt"
    fs.writeFile(rutaTest, JSON.stringify(info), error =>
        {
            if(error) throw Error(`Error en escritura de archivo: ${error.message}`)
        }
    )
        
    } catch (error) {
        console.log('Error en lectura de archivo' + error)
        
    }
    
}) 