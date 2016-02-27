/**
* crear un sistema de reserva de turnos de una sala de ensayo.
El objetivo es que no tomen dos personas el mismo hora.

**/

//crear la grilla de horarios.
// horario tiene que tener un booleano de reservado o no.


(
    function() {

        /**
         *
         * @param hour
         * @param isReserved
         * @returns {{hour: *, isReserved: *}}
         * @constructor
         */
        function Turno(hour, isReserved){
            return {
                hour: hour,
                isReserved: isReserved

            };
        }


        var turnos = [];


        for(var i = 0; i<24;i++ ){
            turnos.push(new Turno(i, false));
        };


        var toggleTurno = function(){
            var $this       = $(this);
            var idTurnoRes  = 'turnoReservado'+$this.data('hour');
            var isReserved  =  $this.data('isReserved');

            $this.toggleClass('btn-danger btn-default');

            if(isReserved){
                //var remove =  $('#'+idTurnoRes).remove();
                var disabled = $('#'+idTurnoRes).removeClass('disabled');
                //console.log(remove)

            }else{
                var disabled = $('#'+idTurnoRes).addClass('disabled');
               // var linea = $('<li id="'+idTurnoRes+'" class="list-group-item">'+$this.data('hour')+'</li>')

                //$('#planilla').append(linea);
            }

            $this.data('isReserved', !isReserved);

        }

        for(hora in turnos){

            var turno   = turnos[hora];
            var id      = 'id'+turno.hour;
            var item    = $('<li class="btn btn-default" id="'+id + '" data-hour="'+turno.hour+'" data-is-reserved="'+turno.isReserved+'">'+turnos[hora].hour+':00'+'</li>');

            $('#horario').append(item);


            var idTurnoRes  = 'turnoReservado'+item.data('hour');

            var linea = $('<li id="'+idTurnoRes+'" class="list-group-item">'+item.data('hour')+'</li>')
            $('#planilla').append(linea);

            $('#'+id).on('click', toggleTurno);

        };
    }()
);





/*function afunction(){
	var _this =this;
    this.horarios = [];

   var hora = function Turno(id, booleano){
        this.id=id;
        this.booleano=booleano;
    };

    return {

		//retorna un listado de objetos hora

		horariosDisponibles: function(){

			for (var i = 9 ; i < 24; i++) {
                horarios.push[new this.hora(i,false)];
			    }
            //console.log(horarios);
            return horarios;
        },
		setearHorarios:function(id){
			var lista=this.horariosDisponibles();
			console.log(lista[id]);

		},
        iterarTurnos: function(){
            for(i in this.horarios){
                console.log('-->',i);
            }
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
			var elemento = $('.btn.btn-default');
			elemento.on('click', function(){

				alert($(this).attr('id'));
			});
		}
	}
};

var app = new afunction();
app.cargarHorario();
app.cargarPlanilla();
app.click();
app.iterarTurnos();

*/


