/**
* crear un sistema de reserva de turnos de una sala de ensayo.
El objetivo es que no tomen dos personas el mismo turno.

**/

//crear la grilla de horarios.
// horario tiene que tener un booleano de reservado o no.
//




var reservaAPP = {

	lista : {},

	reserva: function(id){

		var person = prompt("Reservá la sala a las "+id+':00, ingresando tu nombre' ,"Harry Potter");

		var upload = this.cargarObjeto();

		console.log(upload[id].isReserved=true);

	},
	cargarObjeto: function(){
		var milista = [];
		for (var i = 9 ; i < 24; i++) {

			var index = i;

			var objs = {
				id: index,
				isReserved : false,
				reserveCode:'',
				name:''

			} 
			milista.push(objs);
		}
		return milista;

	},
	cargarHorario : function() {
		var lista=this.cargarObjeto();
		console.log(lista);

		for(var i = 0; i< lista.length; i++){
			var objs = lista[i];
			console.log(objs.id);
			var item = $('<li class="list-group-item disabled" id="'+objs.id+'">'+objs.id+':00'+'</li>');
			var button = $('<button class="btn btn-success pull-right" type="button" onclick="APP.reserva('+objs.id+')">reservala ahora!</button>');
	    	
	    	$("#horario").append(item);
	    	$("#"+objs.id).append(button);

		}

    
     //console.log(lista)
 }

};

window.APP = reservaAPP;