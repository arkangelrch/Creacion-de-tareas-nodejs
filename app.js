const argv = require('./config/yargs').argv;
const col = require('colors');


const porH = require('./por-hacer/por-hacer');

//console.log(argv);
console.log('\n');

let comando = argv._[0];

switch(comando){
	case 'crear':
		let tarea = porH.crear( argv.descripcion );
		console.log( tarea );
	break
	case 'listar':
		let listado = porH.getListado();
		let listac = argv.l;
		let nuevoListado=[];
		switch(listac){
			case 'a':
				listado
			break;
			case 't':
				nuevoListado = listado.filter( tarea => {
					return tarea.completado !== false;
				} )
				listado = nuevoListado;
			break;
			case 'f':
				nuevoListado = listado.filter( tarea => {
					return tarea.completado !== true;
				} )
				listado = nuevoListado;
			break;
			default:
				console.log('No se reconoce el comando: "'+col.red(`${ listac }`)+'"');
				return;
		}
		for (let tarea of listado){
			console.log('=============Por Hacer=============='.green);
			console.log(tarea.descripcion);
			console.log('Estado: ',tarea.completado);
			console.log('===================================='.green);
		}
	break
	case 'actualizar':
		let actualizar = porH.actualizar( argv.descripcion, argv.completado );
		console.log('Actualizar Registro: '+actualizar);
	break
	case 'borrar':
		let borrar = porH.borrar( argv.descripcion );
		console.log( 'Registro borrado: '+borrar );
	break
	default:
		console.log('No se reconoce el comando: "'+col.red(`${ comando }`)+'"');
}

