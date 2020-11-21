var SP;
(function (SP) {
    var Camioneta = /** @class */ (function () {
        function Camioneta(id, marca, modelo, precio, cuatroXcuatro) {
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.cuatroXcuatro = cuatroXcuatro;
            this.tipo = "Camioneta";
        }
        Camioneta.prototype.toString = function () {
            return "Camioneta";
        };
        return Camioneta;
    }());
    SP.Camioneta = Camioneta;
})(SP || (SP = {}));
