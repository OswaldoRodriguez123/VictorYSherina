const costoClase = 3500;
const utils = new Utils();
const presupuestoObj = {
  costoClase,
};
let presupuesto = new Presupuesto(presupuestoObj);

var everythingLoaded = setInterval(() => {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoaded);

    function init() {
      $("#price").html(utils.formatPrice(costoClase));
    }

    init();

    const inputCantidadClases = $("#cantidadClases");
    inputCantidadClases.change(() => {
      calcularClases();
    });
    calcularClases = () => {
      let cantidadClases = Number($(inputCantidadClases).val());

      if (!presupuesto.validarClases(cantidadClases)) {
        cantidadClases = 0;
      }
      presupuesto.generarClases(cantidadClases);

      if (cantidadClases > 0) {
        presupuesto.dibujarFechas();
        $("#budgetTable").fadeIn(1000);
      } else {
        $("#budgetTable").fadeOut(1000);
      }
    };

    const btnSubmit = $("#submit");
    btnSubmit.click((e) => {
      e.preventDefault();
      submit();
    });

    const submit = () => {
      nombre = $("#nombre").val().trim();
      if (!nombre) {
        alert("Ingrese un nombre");
        return;
      }
      if (!utils.validateName(nombre)) {
        alert("Ingrese un nombre valido");
        return;
      }

      correo = $("#correo").val().trim();
      if (!correo) {
        alert("Ingrese un correo");
        return;
      }
      if (!utils.validateEmail(correo)) {
        alert("Ingrese un correo valido");
        return;
      }

      const personaObj = {
        nombre,
        correo,
      };
      const persona = new Persona(personaObj);

      if (presupuesto.clases.length == 0) {
        alert("Ingrese una cantidad de clases valida");
        return;
      }

      presupuesto.calcularTotal();

      const textoClases =
        presupuesto.clases.length > 0 ? "las clases" : "la clase";

      alert(
        `El total presupuestado por ${textoClases} es de: ${utils.formatPrice(
          presupuesto.totalPresupuesto
        )}\ny la primera clase es el ${presupuesto.primeraClase()}`
      );

      presupuesto.persona = persona;
      presupuesto.enviarCorreo();

      console.log(presupuesto);
      resetForm();
    };

    const btnReset = $(":reset");
    btnReset.click((e) => {
      e.preventDefault();
      resetForm();
    });

    resetForm = () => {
      document.getElementById("form").reset();
      calcularClases();
    };
  }
}, 10);
