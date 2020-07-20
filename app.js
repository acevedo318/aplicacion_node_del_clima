const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;


/*
lugar.getLugarLating(argv.direccion)
    .then((info) => {
        console.log(info);
    });*/
    /*
clima.getClima(40.75,-74)
    .then(console.log).
    catch(err => console.log(err));*/

let getInfo = async (direccion) => {

    try {

        const coordenadas = await lugar.getLugarLating(direccion);
        const temperatura = await clima.getClima(coordenadas.lat,coordenadas.lng);
        //SALIDA
        return `El clima de ${coordenadas.direccion} es de ${temperatura} °C`;

    } catch (error) {
        return 'No se pudo determinar el clima de ' + direccion;
    }

    

    
    //console.log(`El clima de XXX es de XX °C`);
    //console.warn('No se pudo determinar el clima de ' + direccion);
} 

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);