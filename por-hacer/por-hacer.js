const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

	let data = JSON.stringify(listadoPorHacer)
	fs.writeFile(`./db/data.json`, data, (err) => {
		if (err)
			throw new Error( 'No se pudo Grabar' );
		else
			return `Success`;
	});

}

const cargarDB = () => {
	try{
		listadoPorHacer = require('../db/data.json');
	}catch (error){
		listadoPorHacer = [];
	}
	//console.log(listadoPorHacer);
}

const crear = (descripcion) => {
	cargarDB();
	let porHacer = {
		descripcion,
		completado: false
	}

	listadoPorHacer.push( porHacer );

	guardarDB();
	return porHacer;
}

const getListado = () => {
	cargarDB();
	return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
	cargarDB();

	let index = listadoPorHacer.findIndex( tarea => {
		return tarea.descripcion === descripcion;
	});
	
	if( index >= 0 ){
		listadoPorHacer[index].completado = completado
		guardarDB();
		return true;
	}else{
		return false;
	}
}

const borrar = ( descripcion ) => {
	cargarDB();
	let nuevaLista = listadoPorHacer.filter( tarea => {
		return tarea.descripcion !== descripcion;
	} )
	
	if( nuevaLista.length === listadoPorHacer.length){
		return false;
	}else{
		listadoPorHacer = nuevaLista;
		guardarDB();
		return true;
	}
	/*
	let index = listadoPorHacer.findIndex( tarea => {
		return tarea.descripcion === descripcion;
	});
	if( index >= 0 ){
		delete listadoPorHacer[index];
                guardarDB();
                return true;
        }else{
                return false;
        }
	*/

} 

module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}
