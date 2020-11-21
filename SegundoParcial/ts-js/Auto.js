var SP;
(function (SP) {
    var Auto = /** @class */ (function () {
        function Auto(id, marca, modelo, precio, cantidadPuertas) {
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.cantidadPuertas = cantidadPuertas;
            this.tipo = "Auto";
        }
        Auto.prototype.toString = function () {
            return "Auto";
        };
        return Auto;
    }());
    SP.Auto = Auto;
})(SP || (SP = {}));
