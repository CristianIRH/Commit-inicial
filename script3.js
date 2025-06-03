//telefono debe tener exactamente 8 digitos, no es obligatoria
function validar(){
    let eTelefono = document.getElementById('telefono')
    let vTelefono = eTelefono.value
    eErrorTelefono = document-getElementById('errorTelefono')
    if (eTelefono <= 8){
        console.log("Telefono registrado")
    
    }}
//contrasenia debe tener mas de 5 caracteres, es obligatoria
function validar(){
    let eContraseña = documento.getElementById('password')
    let vContraseña = eContraseña.value
    eErrorContraseña = document.getElementById('errorPassword')
    if (eContraseña >= 5){
        console.log("Contraseña registrada")
    }
}

