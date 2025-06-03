registro = []

function validar(){
    let eTelefono = document.getElementById('telefono') //telefono debe tener exactamente 8 digitos, no es obligatoria
    let vTelefono = eTelefono.value
    eErrorTelefono = document-getElementById('errorTelefono')
    if (eTelefono <= 8){
        registro.push(eTelefono)
        console.log("Telefono registrado")

    let eContraseña = documento.getElementById('password') //contrasenia debe tener mas de 5 caracteres, es obligatoria
    let vContraseña = eContraseña.value
    eErrorContraseña = document.getElementById('errorPassword')
    if (eContraseña >= 5){
        registro.push(eContraseña)
        console.log("Contraseña registrada")
    
    }}

function eliminar(){
    if(eTelefono == eTelefono){
        eTelefono.innerText
        console.log("Registro eliminado")
    }
    if(eContraseña == eContraseña){
        eContraseña.innerText
        console.log("Contraseña eliminada")
    }
    }
}
function almacenar(){

}
