const descripcion = {
		demand: true,
		alias: 'd',
		desc: 'Tarea por borrar'
	};

const completado = {
		default: true,
		alias: 'c',
		desc: 'Marca como completado  o pendiente la tarea'
	};

const listar = {
		demand: true,
		default: 'a',
		alias: 'l',
		desc: 'Listar todos (a), solo los hecho (t) o solo los por hacer (f)'
	};

const argv = require('yargs')
        .command('listar', 'Listar todos (a), solo los hecho (t) o solo los por hacer (f)', { listar } )
        .command('borrar', 'Borrar un elemento', { descripcion } )
        .command('crear', 'Crea un elemento', { descripcion })
        .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado	})
        .help()
        .argv;

module.exports = {
        argv
}

