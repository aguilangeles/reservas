/**
* crear un sistema de reserva de turnos de una sala de ensayo.
El objetivo es que no tomen dos personas el mismo turno.

**/

//crear la grilla de horarios.
// horario tiene que tener un booleano de reservado o no.

function afunction(){
	var _this =this;

	return {
		//retorna un listado de objetos hora
		horariosDisponibles: function(){
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
		setearHorarios:function(id){
			var lista=this.horariosDisponibles();
			console.log(lista[id]);

		},
		cargarHorario : function() {
			var lista=this.horariosDisponibles();
			for(var i = 0; i < lista.length; i++){
				var objs = lista[i];
				var item = $('<li class="btn btn-default" id="'+objs.id +'" >'+objs.id+':00'+'</li>');
				$('#horario').append(item);
			}
		},
		cargarPlanilla : function() {
			var lista=this.horariosDisponibles();
			for(var i = 0; i < lista.length; i++){
				var objs = lista[i];
				var item = $('<li class="list-group-item" id="'+objs.id +'" >'+objs.id+'  '+ objs.isReserved+'</li>');
				$('#planilla').append(item);
			}
		},

		click : function(afun){
			var id;
			var elemento = $('.btn');
			elemento.on('click', function(){

				alert(this.id);
			});
		}
	}
};

var app = new afunction();
app.cargarHorario();
app.cargarPlanilla();
app.click();




