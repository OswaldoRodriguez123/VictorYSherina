class Utils{
    constructor(){
        this.regexName = /^[$A-Z_][0-9A-Z_$]*$/i;
        this.regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    formatPrice = (price) => '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    formatDate = (d) => {
        const date = new Date(d);
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        if(day < 10){
            day = `0${day}`;
        }
        if(month < 10){
            month = `0${month}`;
        }
        return `${day}-${month}-${year}`;
    }
    mensajeSalida = () => alert('Vuelva pronto');
    validateName = (name) => this.regexName.test(name);
    validateEmail = (email) => this.regexEmail.test(email);
}