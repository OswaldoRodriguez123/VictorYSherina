class Presupuesto{
    constructor(presupuesto){
        this.costoClase = presupuesto.costoClase;
        this.persona = null;
        this.clases = null;
        this.totalPresupuesto = 0;
    }
    validarClases = (cantidadClases) => {
        if(isNaN(cantidadClases) || cantidadClases <= 0 || !Number.isInteger(cantidadClases)){
            return false;
        }
        return true;
    }
    generarClases = (cantidadClases) => {
        let clases = [];
        for(let i=1; i<=cantidadClases; i++){
            const objClase = {
                fechaClase: new Date(Date.now() + i * 24*60*60*1000).toISOString().slice(0, 10)
            }
            const clase = new Clase(objClase);
            clases.push(clase);
        }
        this.clases = clases;
    }
    dibujarFechas = () => {
        const utils = new Utils();
        const budgetTable = document.getElementById('budgetTable');
        const budgetTableTbody = budgetTable.getElementsByTagName('tbody')[0];
        budgetTableTbody.innerHTML = '';
        this.clases.forEach((c,i) => {
            let row = budgetTableTbody.insertRow(i);
            let count = row.insertCell(0);
            var date = row.insertCell(1);
            count.innerHTML = (i+1);
            date.innerHTML = utils.formatDate(c.fechaClase);
        })
    }
    calcularTotal = () => this.totalPresupuesto = this.clases.length * this.costoClase;
    primeraClase = () => this.clases
                            .sort((a,b) => new Date(a.fechaClase) - new Date(b.fechaClase))
                            .map(c => c.fechaClase)[0]
                            .split('-')
                            .reverse()
                            .join('/')
    enviarCorreo = () => alert('El presupuesto fue enviado exitosamente a su correo, gracias por confiar en nosotros');
}