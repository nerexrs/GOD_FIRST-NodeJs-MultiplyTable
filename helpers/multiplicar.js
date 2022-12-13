//GOD FIRST
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    //Cuando declaro la función yo aún no tengo los yargs pero dado que cuando llamo la función
    //el orden de los yargs es b, l, h con sus argv entonces acá yo declaro variables de
    //base, listar y hasta que solo existen en este scope pero que cuando llamo la función
    //estos valores son remplazados por argv.b, argv.l y argv.h y por ese motivo es que
    //Funciona bien sin complicarme la vida.  
    try {

        let salida  = ''; //salida sin colores para guardar el archivo bien
        let consola = ''; //salida con colores donde no importa el formato del archivo para el usuario
        //para que se vea bien
        
        for( let i = 1; i <= hasta; i++ ) {
            salida  += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
            //salida es la información que guarda el programa en archivos de texto
            // de las tablas de multiplicar

            //consola es igual al mensaje que se muestra en consola o el output que sale al dar listar
        }

        if ( listar ) {
            console.log('===================='.green);
            console.log('   Tabla del:'.green, colors.blue( base ) );
            console.log('===================='.green);

            console.log(consola);
        }
        

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );


        return `tabla-${ base }.txt`;
        
    } catch (err) {
        throw err;
    }



}

module.exports = {
    crearArchivo
}