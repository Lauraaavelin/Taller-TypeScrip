var bodyTabla = document.getElementById('series');
var titulo = document.getElementById('total');
import { Serie } from './serie.js';
import { series } from './datosSeries.js';
function ponerValores(series) {
    clearTable();
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.numero, "</td>\n                         <td>").concat(s.nombre, "</td>\n                         <td>").concat(s.canal, "</td>\n                         <td>").concat(s.temporadas, "</td>");
        bodyTabla.appendChild(trElement);
    });
    titulo.textContent = "N\u00FAmero de temporadas totales: ".concat(totalTemporadas(series));
}
function clearTable() {
    if (bodyTabla) {
        while (bodyTabla.firstChild) {
            bodyTabla.removeChild(bodyTabla.firstChild);
        }
    }
}
function totalTemporadas(series) {
    var total = 0;
    series.forEach(function (serie) { return total = total + serie.temporadas; });
    return total;
}
ponerValores(series);
//# sourceMappingURL=main.js.map