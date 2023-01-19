let button = document.querySelector('button');
button.onclick = function (){
    class Stock{
        constructor(id, serv, precio){
            this.id = id;
            this.serv = serv;
            this.precio = precio;
        }
    }
    
    //Alta de Servicios
    function agregar(){
        let desicion = Number(prompt("Seleccione el numero de la opcion a realizar \n 1.- Cargar lista predefinida de Servicios \n2.-Agregar manualmente un servicio"))
            if (desicion == 1 && noCargarListaDosVeces) {
                for (const iterator of arrayServ) {
                servicios.push(iterator)
                }
                console.log("Se cargo lista por default de servicios\n\n")
            servicios.forEach(element => {
                console.log(
                "- ID: " + element.id + "\n" + 
                "- Servicio: " + element.serv + "\n" + 
                "- Precio: $" + element.precio + "\n\n");
            });
            alert("Se ha cargado la lista aleatoria de elementos")
            noCargarListaDosVeces=false;
        }else if (desicion == 1 && noCargarListaDosVeces==false){
            alert("No puede ingresar dos veces la lista de prueba, ya que se repetirian los ID. Si quiere agregar mas elementos, seleccione la forma manual por favor.")
        }else if (desicion==2){
            let flag=true;
            let opcion2=true;
            let opcion3=true;
            let opcion4=true;
            let opcion5=true;
            let opcion6=true;
            let controlDeID=[];
            let controlDePrecio=[];
            do {
                if (flag) {
                    // Do while para que no ingresen un ID invalido
                    let id;
                    do {
                        id = Number(prompt("Ingrese el ID del servicio "));
                        if(!id || isNaN(id)){
                            alert("Ingresó un ID inválido, intente nuevamente!")
                            opcion4=true;
                        }else{
                            controlDeID.push(id);
                            opcion4=false;
                        }
                    } while (opcion4);
        
                    let serv = prompt ("Ingrese Servicio").toUpperCase();
        
                    // Do while para que no ingresen un precio invalido
                    let precio;
                    do {
                        precio = Number(prompt("Ingrese el precio"));
                        if(!precio || isNaN(precio)){
                            alert("Ingresó un precio inválido, intente nuevamente!")
                            opcion5=true;
                        }else{
                            controlDePrecio.push(precio);
                            opcion5=false;
                        }
                    } while (opcion5);
        
                    servicios.push(new Stock(id, serv, precio));
                    console.log("Servicio agregado");
                    flag=false;
                } else {
                    let opcion = confirm("Desea agregar otro servicio?");
                    if (opcion) {
                        let id;
                            // Do while para que no ingresen un ID invalido ni repetido
                            do {
                                id = Number(prompt("Ingrese el siguiente ID del servicio"));
                                if(controlDeID.includes(id) || isNaN(id) || !id){
                                    alert("Ingresó un ID existente o inválido, intente nuevamente!")
                                    opcion3=true;
                                }else{
                                    controlDeID.push(id);
                                    opcion3=false;
                                }
                            } while (opcion3);
        
                        let serv = prompt ("Ingrese el nombre del servicio").toUpperCase();
        
                        // Do while para que no ingresen un precio invalido
                        let precio;
                        do {
                            precio = Number(prompt("Ingrese el precio"));
                            if(isNaN(precio) || !precio){
                                alert("Ingresó un precio inválido, intente nuevamente!")
                                opcion6=true;
                            }else{
                                controlDePrecio.push(precio);
                                opcion6=false;
                            }
                        } while (opcion6);
                        servicios.push(new Stock(id, serv, precio))
                        console.log("Servicio agregado")
                } else{
                    opcion2=false;
                    break;
                }
                }
            } while (opcion2);
        }
        
    }
    // Ver lista de Servicios
    function mostrar(){
        if(servicios.length==0){
            alert("Aun no ha cargado ningún servicio")
        }else{
        console.log("El stock cargado al sistema hasta el momento es el siguiente: \n\n");
        servicios.forEach(element => {
            console.log(
            "- ID: " + element.id + "\n" + 
            "- Servicio: " + element.serv + "\n" + 
            "- Precio: $" + element.precio + "\n\n");
        });
        }
    }
    
    
    //Ordenar
    function ordenar (){
        if(servicios.length==0){
            alert("Aun no ha cargado ningún servicio a la lista de stock")
        }else{
            let menuOrden = Number(prompt(
                "- Ingrese el numero, segun como desea ordenar la lista: \n \n \
                    1) Por numeros de ID. \n \
                    2) Por precios. \n \
                    0) Volver."
                ));
                switch (menuOrden) {
                    case 1:
                        servicios.sort(function (a, b) {
                            if (a.id > b.id) {
                            return 1;
                            }
                            if (a.id < b.id) {
                            return -1;
                            }
                            return 0;
                        });
                        console.log("Los elementos ordenados segun su ID, quedan asi: \n\n");
                        servicios.forEach(element => {
                            console.log(
                            "- ID: " + element.id + "\n" + 
                            "- Servicios: " + element.serv + "\n" + 
                            "- Precio: $" + element.precio + "\n\n");
                        });
                    break;
                    case 2:
                        servicios.sort(function (a, b) {
                            if (a.precio > b.precio) {
                            return 1;
                            }
                            if (a.precio < b.precio) {
                            return -1;
                            }
                            return 0;
                        });
                        console.log("Los elementos ordenados segun su precio, quedan asi: \n\n");
                        servicios.forEach(element => {
                            console.log(
                            "- ID: " + element.id + "\n" + 
                            "- Servicios: " + element.serv + "\n" + 
                            "- Precio: $" + element.precio + "\n\n");
                        });
                    break;
                    case 0:
                    break;
                    default:
                        console.log("\n NOpción no valida, ingrese un numero valido \n");
                    break;
                }
        }
    }
    
    
    //Fitrar
    function filtrar(){
        if(servicios.length==0){
            alert("Aun no ha cargado ningún servicio")
        }else{
    let filtro = Number(prompt(
        "- Ingrese el numero, segun lo que desea hacer: \n \n \
            1.- Mostrar los nombres de cada servicio. \n \
            2.- Mostrar precios. \n \
            0.- Volver."
        ));
        switch (filtro) {
            case 1:
                console.log("Los servicios agregados hasta ahora son: \n\n");
                const soloNombres =  servicios.map((element)=>element.serv)
                for (const key in soloNombres) {
                    console.log("- " + soloNombres[key] + "\n");
                    }
                break;
                case 2:
                    let totalPrecios=0;
                    console.log("Los precios de los servicios: \n\n");
                    const soloPrecios =  servicios.map((element)=>element.precio)
                    for (const key in soloPrecios) {
                    totalPrecios += soloPrecios[key];
                    console.log("- $" + soloPrecios[key] + "\n");
                    }
                    break;
                    case 0:
                break;
                default:
                    console.log("Opción no valida, ingrese un numero valido \n");
                break;
        }
    }
    }
    
    
    //FUNCION PARA ELIMINAR ELEMENTOS
    function eliminar(){
        if(servicios.length==0){
            alert("Aun no ha cargado ningún servicio")
        }else{
            servicios.sort(function (a, b) {
                if (a.id > b.id) {
                return 1;
                }
                if (a.id < b.id) {
                return -1;
                }
                return 0;
            });
            console.log("Los elementos hasta el momento son los siguientes: \n\n");
                        servicios.forEach(element => {
                            console.log(
                            "- ID: " + element.id + "\n" + 
                            "- Servicio: " + element.serv + "\n" + 
                            "- Precio: $" + element.precio + "\n\n");
                        });
        let barridoDeId = [];
        const idEliminar = Number(prompt("Elija de la lista mostrada por consola, el ID del elemento a eliminar"));
        barridoDeId =  servicios.map((element)=>element.id)
    
        if(barridoDeId.includes(idEliminar)){
            let indice = servicios.map(servicios => servicios.id).indexOf(idEliminar)
            servicios.splice(indice, 1);
            console.log("- Ha eliminado el ID " + idEliminar + " exitosamente \n\n");
            alert("- Ha eliminado el ID " + idEliminar + " exitosamente");
        }else{
            alert("El ID que ingresó no corresponde a ningun elemento de la lista.")
        }
    }
    }
    
    //lista predefinida de servicios
    const arrayServ = [
        {id: 1, serv: "Desarrollo Web",  precio: 500},
        {id: 2, serv:"App Mobil", precio: 300},
        {id: 3, serv:"Redes", precio: 800},
        {id: 4, serv:"Marketing digital", precio: 1000},
        ]
    
    
    
    let noCargarListaDosVeces = true
    
    let servicios = [];

    
    //Menu
    do {
        menu = Number(prompt(
            "- Ingrese el numero, segun lo que desea hacer: \n \n \
                1.- Agregar servicios. \n \
                2.- Mostrar listado. \n \
                3.- Ordenar listado \n \
                4.- Filtrar Servicios por una de sus propiedades. \n \
                5.- Eliminar Servicios \n \
                0.- Salir del programa."
            ));
        
        switch (menu) {
            case 1:
                agregar();
            break;
            case 2:
                mostrar();
            break;
            case 3:
                ordenar();
            break;
            case 4:
                filtrar()
            break;
            case 5:
                eliminar()
            break;

                case 0:
                alert("Gracias por utilizar nuestro programa!")
            break;
            default:
                alert("\n No ingresó ninguno de los numeros de la lista. Ingrese nuevamente por favor \n");
            break;
          }
        } while (menu != 0);
    
    
}
