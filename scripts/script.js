var numConnection = 300;
var numRequest = 2;

// actualizamos los elementos html con los valores por defecto
// que corresponden al valor de las variables nnumConnection y numRequest
updateConnection();
updateRequest();


function acceptRequest(idRow){
    // removems la fila correspondiente
    var row = document.getElementById(idRow);
    row.remove();

    // descontar número de solicitudes
    numRequest--;

    // actualizamos el elemento html
    updateRequest();

    // al aceptar la solicitud, el número de conexiones aumenta
    numConnection++;

    // actualizamos el elemento html correspondiente
    updateConnection();
}

function closeRequest(idRow){
    // removemos la fila correspondiente
    var row = document.getElementById(idRow)
    row.remove();

    // descontar número de solicitudes
    numRequest--;

    // actualizamos el elemento html
    updateRequest();
}

/**
 * actualiza el valor del elemento html
 */
function updateRequest(){
    var requestElement = document.getElementById('number-request');
    requestElement.innerHTML = numRequest;

    // si el número de conexiones llega a cero, se indica que no existen solicitudes
    if( numRequest == 0 ){
        bodyRequest = document.getElementById('card-body');
        bodyRequest.innerHTML = 'No existen solicitudes';
    }
}

/**
 * actualiza el valor de las conexiones en el elemento html
 */
function updateConnection(){
    var connectionElement = document.getElementById('number-connection');
    connectionElement.innerHTML = numConnection;
}

function editProfile(){
    var element = document.getElementById('profile-name');

    if(element.innerHTML == 'Jane Doe'){
        element.innerHTML = 'Briggitte Ramírez';
    } else {
        element.innerHTML = 'Jane Doe';
    }
}