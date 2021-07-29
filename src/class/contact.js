class Contacto {
  constructor(contacto) {
    this.persona = contacto.persona;
    this.medio = contacto.medio;
    this.mensaje = contacto.mensaje;
    this.actualizaciones = contacto.actualizaciones;
  }
  enviarCorreo = () =>
    alert(
      "En un momento nos contactaremos con usted, gracias por confiar en nosotros"
    );
}
