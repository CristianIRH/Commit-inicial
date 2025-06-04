let registro = [];

function validar(){
    let eTelefono = document.getElementById('telefono');
    let vTelefono = eTelefono.value.trim();
    let eErrorTelefono = document.getElementById('errorTelefono');

    let ePassword = document.getElementById('password');
    let vPassword = ePassword.value.trim();
    let eErrorPassword = document.getElementById('errorPassword');

    let esValido = false;
    //Validacion del telefono
    if (vTelefono.lenght == 8) {
        esValido = true;
        eErrorTelefono.textContent = "";
    } else {
        eErrorTelefono.textContent = "El teléfono debe tener 8 dígitos.";}
        esValido = false;
    //Validacion de password
    if (vPassword.length <= 5) {
        eErrorPassword.textContent = "";
        esValido = true;
    } else {
        eErrorPassword.textContent = "La contraseña debe tener más de 5 caracteres.";
        esValido = false;}

    if (esValido) {
        let T ={
            eTelefono : vTelefono
        }
        registro.push({ telefono: vTelefono, password: vPassword });
        mostrarTabla();
        document.getElementById('miFormulario').reset();
    }
}
//función cargar datos
function mostrarTabla(){
    let CuerpoTabla = document.getElementById('cuerpoTabla')
    let registroMap = registro.map((T,index))
        return "<td><button onclick='eliminar("+index+")'>Eliminar</button><button onclick='actualizarForm("+index+")'>Actualizar</button></td></tr>"

}
