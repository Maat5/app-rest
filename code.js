var seleccionados = [];

function insertar(comida, imagen){
	var count = 0;
	for (var i = 0; i < seleccionados.length; i++) {
		if(seleccionados[i] === comida){
			count++;
		}
	}
	if(count === 0){
		seleccionados.push(comida);
		$("#listaSeleccionados").append(
			$('<li>').append($('<img>').attr('src',imagen).attr("width", 50).attr("heigth",50).attr("style", "display:inline-block;vertical-align:middle;margin-right:10px")).append($('<span>').text(comida)).removeClass( "ui-li ui-li-static ui-body-b ui-li-has-thumb" ));
	}
}
