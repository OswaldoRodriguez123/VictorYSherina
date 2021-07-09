const costoClase = 3500;
const utils = new Utils();
const btnSubmit = document.querySelector('#submit');
const inputCantidadClases = document.querySelector('#cantidadClases');
const presupuestoObj = {
    costoClase
}
let presupuesto = new Presupuesto(presupuestoObj);

function init() {
    document.getElementById("price").innerHTML = utils.formatPrice(costoClase);
}

btnSubmit.onclick = (e) => {
    e.preventDefault();
    submit();
}

inputCantidadClases.onchange = (e) => {
    let cantidadClases = Number(e.target.value);

    if(!presupuesto.validarClases(cantidadClases)){
        cantidadClases = 0;
    }
    presupuesto.generarClases(cantidadClases);
    presupuesto.dibujarFechas();
}

const submit = () => {
    nombre = document.getElementById('nombre').value.trim();
    if(!nombre){
        alert('Ingrese un nombre');
        return;
    }
    if(!utils.validateName(nombre)){
        alert('Ingrese un nombre valido');
        return;
    }

    correo = document.getElementById('correo').value.trim();
    if(!correo){
        alert('Ingrese un correo');
        return;
    }
    if(!utils.validateEmail(correo)){
        alert('Ingrese un correo valido');
        return;
    }

    const personaObj = {
        nombre,
        correo
    }
    const persona = new Persona(personaObj);

    if(presupuesto.clases.length == 0){
        alert('Ingrese una cantidad de clases valida');
        return;
    }

    presupuesto.calcularTotal();

    const textoClases = presupuesto.clases.length > 0 ? 'las clases' : 'la clase';

    alert(`El total presupuestado por ${textoClases} es de: ${presupuesto.totalPresupuesto}\ny la primera clase es el ${presupuesto.primeraClase()}`);

    presupuesto.persona = persona;
    presupuesto.enviarCorreo();

    console.log(presupuesto)
}

init();