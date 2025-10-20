"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(num, nom, can, temp, des, link, imag) {
        this.numero = num;
        this.nombre = nom;
        this.canal = can;
        this.temporadas = temp;
        this.descripcion = des;
        this.link = link;
        this.imagen = imag;
    }
    return Serie;
}());
exports.Serie = Serie;
