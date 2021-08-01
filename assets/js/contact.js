const utils = new Utils();

var everythingLoaded = setInterval(() => {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoaded);
    getMedios();

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

      medio = $("#medio").val().trim();
      mensaje = $("#mensaje").val().trim();
      actualizaciones = $("#actualizaciones").is(":checked");
      const personaObj = {
        nombre,
        correo,
      };
      const persona = new Persona(personaObj);

      const contactoObj = {
        persona,
        medio,
        mensaje,
        actualizaciones,
      };
      let contacto = new Contacto(contactoObj);
      contacto.enviarCorreo();

      console.log(contacto);
      document.getElementById("form").reset();
    };
  }
}, 10);

getMedios = () => {
  $.getJSON("assets/data/medios.json", (medios) => {
    if (medios) {
      let medioshtml = "";
      medios.forEach((medio) => {
        medioshtml += `<option value="${medio.id}">${medio.nombre}</option>`;
      });
      $("#medio").html(medioshtml);
    }
  });
};
