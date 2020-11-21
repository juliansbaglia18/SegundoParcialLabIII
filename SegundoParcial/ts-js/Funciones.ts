namespace SP{
    var listaVehiculos:any = new Array;


    window.addEventListener("load", () =>{
        let btnGuardar =document.getElementById("btnGuardar");
        btnGuardar.addEventListener("click",AgregarVehiculos);
        let btnAbrir =document.getElementById("btnAbrir");
        btnAbrir.addEventListener("click",abrirContenedor);
        let btnCerrar =document.getElementById("btnCerrar");
        btnCerrar.addEventListener("click",cerrarContenedor);
        let slcFiltro =document.getElementById("slcFiltro");
        slcFiltro.addEventListener("change",Filtrar);
        let btnPromedio =document.getElementById("btnPromedio");
        btnPromedio.addEventListener("click",Promedio);
    });
    export function abrirContenedor(){
        let contenedor = document.getElementById("divContenedor");

        contenedor.hidden = false;
    }
    export function cerrarContenedor(){
        let contenedor = document.getElementById("divContenedor");

        contenedor.hidden = true;
    }
    export function Promedio(){
        let txt = document.getElementById("promedio");

        var list = new Array;

        if(listaVehiculos.length <1)
        return 1;
        for (var i; i < listaVehiculos.length; i++){
            list.push(listaVehiculos[i].precio);
        }        

        txt.value = list.reduce((total, precio)=>{
            return total += precio;
        },0);

        // txt.value = 
    }
    
    export function Filtrar(){
        let slcFiltro =(<HTMLInputElement>document.getElementById("slcFiltro")).value;
        


        switch(slcFiltro){
            case "nada":
                CargarTabla(listaVehiculos);
                break;
            case "auto":
                CargarTabla(obtenerAutos());
                break;
            case "camioneta":
                CargarTabla(obtenerCamionetas());
                break;
        }
    }


    export function obtenerAutos(){
        return listaVehiculos.filter((auto) =>{
            return auto.toString() == "Auto";
        });
    }
    export function obtenerCamionetas(){
        return listaVehiculos.filter((camioneta) =>{
            return camioneta.toString() == "Camioneta";
        });
    }

    export function AgregarVehiculos(){

        var id = idMayor(listaVehiculos);
        let marca = (<HTMLInputElement>document.getElementById("txtMarca")).value;
        let modelo = (<HTMLInputElement>document.getElementById("txtModelo")).value;
        let tipo = (<HTMLInputElement>document.getElementById("slcTipo")).value;
        let precio = Number((<HTMLInputElement>document.getElementById("txtPrecio")).value);
        switch (tipo){
            case "auto":
                console.log("Nuevo Auto");
                var auto:Auto = new Auto(id, marca,modelo,precio);
                
                listaVehiculos.push(auto);
                
                break;
                case "camioneta":
                    console.log("Nueva camioneta");
                    var camioneta:Camioneta = new Camioneta(id, marca,modelo,precio);
                    
                    listaVehiculos.push(camioneta);
                    
                    break;
                    default:
                        console.log("Error");
                        break;                
                    }
                    
                    CargarTabla(listaVehiculos);
    }
    export function ModificarAnimal(){
        for(var i = 0; i<listaVehiculos.length; i++){
            if(listaVehiculos[i].nombre == (<HTMLInputElement>document.getElementById("txtNombre")).value){
                listaVehiculos[i].raza = (<HTMLInputElement>document.getElementById("txtDato")).value;
            }
        }
    }
    export function EliminarVehiculo(event){
        
    }



    export function ListarAuto(){
        listaVehiculos.forEach((item) => {
            item.nombre
            // console.log(item.perro);
            console.log(item.nombre + " dice " + item.hacerRuido() + " es un ");
        });
        
    }
    export function Prueba(){
        var perros = obtenerPerros(listaVehiculos);

        for(var i = 0; i<perros.length; i++){
            // var mapped = listaVehiculos.map(x => x * x);
            // console.log(typeof( listaVehiculos[i]));
            console.log(perros[i].nombre);
            // if(listaVehiculos[i] == Perro){
                
        }
    }

    export function obtenerPerros(list){
        return list.filter((perros) =>{
            return perros.toString() == "Perro";
        });
    }
    export function obtenerGatos(list){
        return list.filter((gatos) =>{
            return gatos.toString() == "Gato";
        });
    }
    export function obtenerPatos(list){
        return list.filter((patos) =>{
            return patos.toString() == "Pato";
        });
    }

    export function CargarTabla(lista){

        let tbody = document.getElementById("tcuerpo");

        var nuevoTbody = document.createElement('tbody');
        tbody.parentNode.replaceChild(nuevoTbody,tbody);

        nuevoTbody.id = "tcuerpo";
        var tabla=document.getElementById("tcuerpo");

        for(var i=0; i<listaVehiculos.length;i++)
        {
            var auto=new Array(lista[i].id, lista[i].marca,lista[i].modelo,
                lista[i].precio);
            var trAuto=CrearNodo(auto);
            
            
            // trMateria.addEventListener("dblclick", abrirContenedor);
            
            tabla.appendChild(trAuto);

            
            // var element=document.getElementsByTagName("tr");
            // for(var j=0; j<element.length; j++)
            // {
            //     listaTr.push(element[i]);
            // }
            // listaJson.push(json[i]);
        }
    }

    export function CrearNodo(auto)
    {
    var trAuto=document.createElement("tr");
    

    var tdId=document.createElement("td");
    var tdMarca=document.createElement("td");
    var tdModelo=document.createElement("td");
    var tdPrecio=document.createElement("td");
    var tdElim=document.createElement("button");



    var txId=document.createTextNode(auto[0]);
    var txMarca= document.createTextNode(auto[1]);
    var txModelo=document.createTextNode(auto[2]);
    var txPrecio=document.createTextNode(auto[3]);
    var txElim=document.createTextNode("Eliminar");
    tdElim.addEventListener("click",EliminarVehiculo);
    tdElim.id = String( txId);
  
    tdId.appendChild(txId);
    tdMarca.appendChild(txMarca);
    tdModelo.appendChild(txModelo);
    tdPrecio.appendChild(txPrecio);
    tdElim.appendChild(txElim);
  
    trAuto.appendChild(tdId);
    trAuto.appendChild(tdMarca);
    trAuto.appendChild(tdModelo);
    trAuto.appendChild(tdPrecio);
    trAuto.appendChild(tdElim);
    
    return trAuto;
    }

    export function idMayor(){
        var list = new Array;

        if(listaVehiculos.length <1)
        return 1;
        for (var i; i < listaVehiculos.length; i++){
            list.push(listaVehiculos[i].id);
        }
      var  retorno = list.reduce((total, id)=>{
           if(total < id){
               return id;
            }
            return total;
        },0);
    
        return retorno + 1;
    }
}