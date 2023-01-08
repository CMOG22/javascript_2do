/*
let button = document.querySelector('button');
button.onclick =function () {
    alert("Bienvenido a servicios de TI \nVamos a ayudarlo con su experiencia por el sitio por favor seleccione las opciones utilizando el teclado númerico");
    let seleccion = prompt("Selecciona una de las siguientes opciones: \n1 - Contratar servicio. \n2 - Nuestra garantía. \n3 - Salir")
    if (seleccion == 1){
        function sumarServicios(web=0, app=0, marketing=0, redes=0, soporte=0){
            return web + app + marketing + redes + soporte
        }
        let web1 = Number(prompt("¿Quieres contratar el servicio de Desarrollo Web? \nEscribe 1 para contratar \nEscribe 0 para no contratar")) 
        if (web1 == 1){
            web1 = 1500;
        }else {
            web1 = 0;
        }
        let app1 = Number(prompt("¿Quieres contratar el servicio de Desarrollo de App Mobile? \nEscribe 1 para contratar \nEscribe 0 para no contratar"))
        if (app1 == 1) {
            app1 = 2000;
        }else {
            app1 = 0;
        }
        let marketing1 = Number(prompt("¿Quieres contratar el servicio de Marketing Digital? \nEscribe 1 para contratar \nEscribe 0 para no contratar"))
        if (marketing1 == 1){
            marketing1 = 500;
        } else {
            marketing1 = 0;
        }
        let redes1 = Number(prompt("¿Quieres contratar el servicio de Instalación de Redes? \nEscribe 1 para contratar \nEscribe 0 para no contratar"))
        if (redes1 == 1){
            redes1 = 750;
        }else {
            redes1 = 0;
        }
        let soporte1 = Number(prompt("¿Quieres contratar el servicio de Soporte tecnico? \nEscribe 1 para contratar \nEscribe 0 para no contratar"))
        if (soporte1 == 1 ){
            soporte1 = 300;
        }else {
            soporte1 = 0;
        }
        let serviciosContratados = sumarServicios(web1, app1, marketing1, redes1, soporte1)
        if (serviciosContratados >= 1 && serviciosContratados <= 2000){
            alert("Total de servicios Contratados: USD$" + serviciosContratados);
        }
        else if (serviciosContratados >= 2001){
            serviciosContratados = serviciosContratados * 0.95;
            alert("Se otorgo un descuento del 5% \nTotal de servicios contratados: USD$"+ serviciosContratados);
        }else if (serviciosContratados >= 3001){
            serviciosContratados = serviciosContratados * 0.90;
            alert("Se otorgo un descuento del 10% \nTotal de servicios contratados: USD$"+ serviciosContratados);
        }else if (serviciosContratados >=4001){
            serviciosContratados = serviciosContratados * 0.87;
            alert("Se otorgo un descuento del 13% \nTotal de servicios contratados: USD$"+ serviciosContratados);
        }
        if (serviciosContratados == 0){
            alert("No se selecciono ningun servicio \nLamentamos no poder ayudarle. \nGracias por su visita")
        }else if(serviciosContratados > 0){
            alert("Le solicitaremos sus datos para iniciar con el tramite del servicio y poderlo contactar")
            let nombre = prompt("Ingresa tu nombre completo:")
            let empresa = prompt("Nombre de la empresa:")
            let telefono = prompt("Telefono:")
            let correo = prompt("Correo electronico:")
            alert("Gracias por contratarnos " + nombre + "\n\nDatos registrados: \nEmpresa: " + empresa + "\nTelefono: " + telefono + "\nCorreo Electronico: " +correo)
        }
    }else if (seleccion == 2){
        alert("Somos una empresa con mas de 2 años de experiencia y con una retención de clientes del 95%, quedando totalmente satisfechos \n\nLo invitamos a realizar su pedido con toda confianza. \n\nContamos con diversos metodos de pago como son: \n - Pago en linea \n - Pago por transferencia bancaria")
    }else if (seleccion == 3){
        alert("Gracias por su visita \nEsperamos que regrese pronto")
    }
}
*/
let button = document.querySelector('button');
button.onclick =function () {
    let usuario = prompt("¿Eres cliente o administrador?\nEscribe -salir- para terminar");
    while (usuario != "salir"){
        switch (usuario) {
            case "adm":
                alert("Bienvenido, ¿qué vamos a hacer hoy? \n" + "Seleccione el número de la acción a realizar\n" + "1.- Dar de alta un producto\n" + "2.- Dar de baja un articulo");






            break;
            case "cliente":

            break;
        }
        usuario = prompt("¿Eres cliente o administrador?\nEscribe -salir- para terminar");
    }

}
/*
let alumnos = '';
for (let index = 0; index < 3; index++) {
    alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
}
alert(alumnos);
*/ //diapositiva 30


