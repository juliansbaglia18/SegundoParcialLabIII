var SP;
(function (SP) {
    var listaVehiculos = new Array;
    window.addEventListener("load", function () {
        var btnGuardar = document.getElementById("btnGuardar");
        btnGuardar.addEventListener("click", AgregarVehiculos);
        var btnAbrir = document.getElementById("btnAbrir");
        btnAbrir.addEventListener("click", abrirContenedor);
        var btnCerrar = document.getElementById("btnCerrar");
        btnCerrar.addEventListener("click", cerrarContenedor);
        var slcFiltro = document.getElementById("slcFiltro");
        slcFiltro.addEventListener("change", Filtrar);
        var btnPromedio = document.getElementById("btnPromedio");
        btnPromedio.addEventListener("click", Promedio);
    });
    function abrirContenedor() {
        var contenedor = document.getElementById("divContenedor");
        contenedor.hidden = false;
    }
    SP.abrirContenedor = abrirContenedor;
    function cerrarContenedor() {
        var contenedor = document.getElementById("divContenedor");
        contenedor.hidden = true;
    }
    SP.cerrarContenedor = cerrarContenedor;
    function Promedio() {
        var txt = document.getElementById("promedio");
        var list = new Array;
        if (listaVehiculos.length < 1)
            return 1;
        for (var i; i < listaVehiculos.length; i++) {
            list.push(listaVehiculos[i].precio);
        }
        txt.value = list.reduce(function (total, precio) {
            return total += precio;
        }, 0);
        // txt.value = 
    }
    SP.Promedio = Promedio;
    function Filtrar() {
        var slcFiltro = document.getElementById("slcFiltro").value;
        switch (slcFiltro) {
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
    SP.Filtrar = Filtrar;
    function obtenerAutos() {
        return listaVehiculos.filter(function (auto) {
            return auto.toString() == "Auto";
        });
    }
    SP.obtenerAutos = obtenerAutos;
    function obtenerCamionetas() {
        return listaVehiculos.filter(function (camioneta) {
            return camioneta.toString() == "Camioneta";
        });
    }
    SP.obtenerCamionetas = obtenerCamionetas;
    function AgregarVehiculos() {
        var id = idMayor(listaVehiculos);
        var marca = document.getElementById("txtMarca").value;
        var modelo = document.getElementById("txtModelo").value;
        var tipo = document.getElementById("slcTipo").value;
        var precio = Number(document.getElementById("txtPrecio").value);
        switch (tipo) {
            case "auto":
                console.log("Nuevo Auto");
                var auto = new SP.Auto(id, marca, modelo, precio);
                listaVehiculos.push(auto);
                break;
            case "camioneta":
                console.log("Nueva camioneta");
                var camioneta = new SP.Camioneta(id, marca, modelo, precio);
                listaVehiculos.push(camioneta);
                break;
            default:
                console.log("Error");
                break;
        }
        CargarTabla(listaVehiculos);
    }
    SP.AgregarVehiculos = AgregarVehiculos;
    function ModificarAnimal() {
        for (var i = 0; i < listaVehiculos.length; i++) {
            if (listaVehiculos[i].nombre == document.getElementById("txtNombre").value) {
                listaVehiculos[i].raza = document.getElementById("txtDato").value;
            }
        }
    }
    SP.ModificarAnimal = ModificarAnimal;
    function EliminarVehiculo(event) {
    }
    SP.EliminarVehiculo = EliminarVehiculo;
    function ListarAuto() {
        listaVehiculos.forEach(function (item) {
            item.nombre;
            // console.log(item.perro);
            console.log(item.nombre + " dice " + item.hacerRuido() + " es un ");
        });
    }
    SP.ListarAuto = ListarAuto;
    function Prueba() {
        var perros = obtenerPerros(listaVehiculos);
        for (var i = 0; i < perros.length; i++) {
            // var mapped = listaVehiculos.map(x => x * x);
            // console.log(typeof( listaVehiculos[i]));
            console.log(perros[i].nombre);
            // if(listaVehiculos[i] == Perro){
        }
    }
    SP.Prueba = Prueba;
    function obtenerPerros(list) {
        return list.filter(function (perros) {
            return perros.toString() == "Perro";
        });
    }
    SP.obtenerPerros = obtenerPerros;
    function obtenerGatos(list) {
        return list.filter(function (gatos) {
            return gatos.toString() == "Gato";
        });
    }
    SP.obtenerGatos = obtenerGatos;
    function obtenerPatos(list) {
        return list.filter(function (patos) {
            return patos.toString() == "Pato";
        });
    }
    SP.obtenerPatos = obtenerPatos;
    function CargarTabla(lista) {
        var tbody = document.getElementById("tcuerpo");
        var nuevoTbody = document.createElement('tbody');
        tbody.parentNode.replaceChild(nuevoTbody, tbody);
        nuevoTbody.id = "tcuerpo";
        var tabla = document.getElementById("tcuerpo");
        for (var i = 0; i < listaVehiculos.length; i++) {
            var auto = new Array(lista[i].id, lista[i].marca, lista[i].modelo, lista[i].precio);
            var trAuto = CrearNodo(auto);
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
    SP.CargarTabla = CargarTabla;
    function CrearNodo(auto) {
        var trAuto = document.createElement("tr");
        var tdId = document.createElement("td");
        var tdMarca = document.createElement("td");
        var tdModelo = document.createElement("td");
        var tdPrecio = document.createElement("td");
        var tdElim = document.createElement("button");
        var txId = document.createTextNode(auto[0]);
        var txMarca = document.createTextNode(auto[1]);
        var txModelo = document.createTextNode(auto[2]);
        var txPrecio = document.createTextNode(auto[3]);
        var txElim = document.createTextNode("Eliminar");
        tdElim.addEventListener("click", EliminarVehiculo);
        tdElim.id = String(txId);
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
    SP.CrearNodo = CrearNodo;
    function idMayor() {
        var list = new Array;
        if (listaVehiculos.length < 1)
            return 1;
        for (var i; i < listaVehiculos.length; i++) {
            list.push(listaVehiculos[i].id);
        }
        var retorno = list.reduce(function (total, id) {
            if (total < id) {
                return id;
            }
            return total;
        }, 0);
        return retorno + 1;
    }
    SP.idMayor = idMayor;
})(SP || (SP = {}));
