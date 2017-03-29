function agregarPendiente (){
    var nuevoElemento = document.getElementById("texto").value;
    var elementoLista = document.createElement("li");
    espacioTexto.innerHTML = nuevoElemento;

    agregarPendiente.appendChild("texto");
 };



/*function agregarPendiente (){
    var nuevoElemento = document.getElementById("texto").value;
    var elementoLista = document.createElement("li");

    espacioTexto.innetHTML = nuevoElemento;

    agregarPendiente.appendChild(li);
};*/


function agregarPendiente2 (){
    var nuevoElemento2 = document.getElementById("texto2").value;
    var elementoLista2 = document.createElement("li");
    espacioTexto2.innerHTML = nuevoElemento2;

    agregarPendiente2.appendChild("li");
}


function crearLista (){
  var nombreLista = document.getElementById("agregarLista").value;
  espacioNuevaLista.innerHTML = nombreLista;

}
