var everythingLoaded = setInterval(() => {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoaded);

    const costoClase = 3500;
    const utils = new Utils();
    const btnSubmit = $("#submit");
    const inputCantidadClases = $("#cantidadClases");
    const presupuestoObj = {
      costoClase,
    };
    let presupuesto = new Presupuesto(presupuestoObj);

    function init() {
      $("#price").html(utils.formatPrice(costoClase));
    }

    init();

    btnSubmit.click((e) => {
      e.preventDefault();
      submit();
    });

    inputCantidadClases.change((e) => {
      let cantidadClases = Number(e.target.value);

      if (!presupuesto.validarClases(cantidadClases)) {
        cantidadClases = 0;
      }
      presupuesto.generarClases(cantidadClases);
      presupuesto.dibujarFechas();
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
        `El total presupuestado por ${textoClases} es de: ${
          presupuesto.totalPresupuesto
        }\ny la primera clase es el ${presupuesto.primeraClase()}`
      );

      presupuesto.persona = persona;
      presupuesto.enviarCorreo();

      console.log(presupuesto);
    };
  }
}, 10);
