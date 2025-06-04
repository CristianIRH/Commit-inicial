let registro = []

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
        eErrorTelefono.textContent = "";
    } else {
        eErrorTelefono.textContent = "El teléfono debe tener 8 dígitos.";
        esValido = true;}
    //Validacion de password
    if (vPassword.length <= 5) {
        eErrorPassword.textContent = "";
        esValido = false;
    } else {
        eErrorPassword.textContent = "La contraseña debe tener más de 5 caracteres.";
        esValido = true;}
    if (esValido){
        registro.push({ telefono: vTelefono, password: vPassword });
        cargarDatos();
        document.getElementById('miFormulario').reset();}
    }
//Funcion cargar datos
function cargarDatos() {
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    let registroMap = registro.map((t, index) => {
        return `
            <tr>
                <td>${t.telefono}</td>
                <td>${t.password}</td>
                <td>
                    <button onclick='eliminar(${index})'>Eliminar</button>
                    <button onclick='cargarFormulario(${index})'>Actualizar</button>
                </td>
            </tr>
        `;
    });
    console.log("Cargando datos...");
    console.log(registroMap);
    let registroHTML = registroMap.join("");
    console.log("Agregando los datos");
    console.log(registroHTML);
    cuerpoTabla.innerHTML = registroHTML;
}
//funcion eliminar
function eliminar(indice) {
    if (confirm("¿Estás seguro de que quieres eliminar este registro?")) {
        registro = registro.filter((t, index) => index !== indice);
        cargarDatos();
    }
}
//funcion actualizar
function actualizar(){
    let eTelefono = document.getElementById("telefonoAct")
    let vTelefono = eTelefono.value
    let actualizar_btna = document.getElementById("btna")
    let indice = actualizar_btna.value
    personas = personas.map((t,index)=>{
        if(index == indice){
            return  {
            telefono : vTelefono
            }
        }else{
            return t
        }
    })
    cargarDatos()
}
//cargar el formulario
function cargarFormulario(indice){
    indiceActual = indice;
    document.getElementById('telefonoAct').value = registro[indice].telefono;
    document.getElementById('passwordAct').value = registro[indice].password;
    document.getElementById('formularioActualizar').style.display = 'block';
}
//guardar datos actualizados
function guardarActualizacion(){
    let telefonoAct = document.getElementById('telefonoAct').value;
    let passwordAct = document.getElementById('passwordAct').value;     
    registro[indiceActual].telefono = telefonoAct;
    registro[indiceActual].password = passwordAct;        
    cargarDatos();
    cancelarActualizacion();
}
//cancelar los datos a actualizar
function cancelarActualizacion(){
    document.getElementById('formularioActualizar').style.display = 'none';
}