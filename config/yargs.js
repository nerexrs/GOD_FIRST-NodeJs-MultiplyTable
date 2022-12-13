const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este es el número hasta donde quieres la tabla'
    })
    .option('l', { //cualquier opcion nueva en yargs la configuro con .option
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check( (argv, options) => { //el check verifica si el comando base es un numero o no
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;
    //.argv es lo último que se obtiene, quiero sacar el objeto argv de yargs pero
    //para poder usarlo correctamente primero tengo que declarar las opciones y los checks para 
    //de esa forma poder acceder a ellos con mi .argv como primer parametro


    //acá están las opciones de mi yarg es decir los -b o --base o sea los flags


module.exports = argv;