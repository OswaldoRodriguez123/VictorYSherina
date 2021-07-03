class Utils{
    constructor(){
        this.regexName = /^[$A-Z_][0-9A-Z_$]*$/i;
        this.regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    formatPrice = (price) => '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    mensajeSalida = () => alert('Vuelva pronto');
    validateName = (name) => this.regexName.test(name);
    validateEmail = (email) => this.regexEmail.test(email);
}