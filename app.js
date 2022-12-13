const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


console.clear(); //con esto limpio mi pantalla y todo lo que tengo escrito

crearArchivo( argv.b, argv.l, argv.h ) //acá le paso a la función crear archivo
//los parametros u opciones de mis yargs de la carpeta config yargs
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );
