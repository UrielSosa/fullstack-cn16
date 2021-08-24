const os = require('os')
let memLibre = os.totalmem()
let arqCPU = os.arch()
let info = os.cpus()
let dir = os.homedir()
let network = os.networkInterfaces()
let host = os.hostname()
let loadAvg = os.loadavg()
let platform = os.platform()
let version = os.release()

function datosPC () {
    
    return [
        'Memoria libre: ' + (memLibre / 100000000).toFixed(2) + ' GB',
        'Arquitectura: ' + arqCPU, 
        'Modelo: ' + info[0].model,
        'Velocidad: ' + info[0].speed,
        'Directorio Actual: ' + dir,
        'Host: ' + host,
        'Load Average: ' + loadAvg,
        'Plataforma: ' + platform.toUpperCase(),
        'Version: ' + version
    ]
}
module.exports = datosPC;