document.addEventListener("DOMContentLoaded", () => {
  header = `  <section class="topbar container clearfix d-none d-lg-block">
                    <div>
                        <div class="topbar__contactInfo float-left">
                            <i class="icofont-envelope"></i><a href="mailto:info@victorysherina.com">info@victorysherina.com</a>
                            <i class="icofont-phone"></i> 999999999
                        </div>
                        <div class="topbar__social float-right">
                            <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
                            <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
                            <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
                        </div>
                    </div>
                </section>
                <header class="header container">
                    <a href="#menu" id="menuShow" class="header__menuShow float-right">
                        <span class="bx bx-menu"></span>
                    </a>
                    <div class="header__logo float-left">
                        <a href="index.html"><img src="assets/img/logo.jpg" alt="Logo" class="img-fluid"></a>
                    </div>
                    <nav id="menu" class="header__menu float-right">
                        <a href="#menuShow" class="header__menuClose">
                            <span class="bx bx-x"></span>
                        </a>
                        <ul>
                            <li><a href="index.html">Inicio</a></li>
                            <li><a href="services.html">Servicios</a></li>
                            <li><a href="portfolio.html">Nosotros</a></li>
                            <li><a href="budget.html">Presupuesto</a></li>
                            <li><a href="contact.html">Contacto</a></li>
                        </ul>
                    </nav>
                    <a href="#menuShow" class="backdrop"></a>
                </header>`;

  footer = `  <footer class="footer">
                    <div class="footer__topFooter">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 footer__footerInfo">
                                    <h3>Victor y Sherina</h3>
                                    <p>
                                        <strong>Teléfono:</strong> 99999999<br>
                                        <strong>Direccion:</strong> Sta Isabel 1127, Santiago, Región Metropolitana<br>
                                    </p>
                                    <div class="footer__social mt-3">
                                        <a href="#"><i class="bx bxl-twitter"></i></a>
                                        <a href="#"><i class="bx bxl-facebook"></i></a>
                                        <a href="#"><i class="bx bxl-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="footer__copyright">
                            <strong><span>Academia Victor & Sherina © 2021</span></strong>.
                        </div>
                        <div class="footer__credits">
                            Desarrollado por Oswaldo Rodriguez
                        </div>
                    </div>
                </footer>`;

  body = document.getElementsByTagName("body")[0];
  body.insertAdjacentHTML("beforebegin", header);
  body.insertAdjacentHTML("beforeend", footer);

  filename = window.location.pathname
    .split("/")
    .pop()
    .split("#")[0]
    .split("?")[0];
  menu = document.querySelectorAll(`[href="${filename}"]`).forEach((m) => {
    m.classList.add("active");
  });

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "assets/vendor/jquery/jquery.min.js";

  document.head.appendChild(script);
});
