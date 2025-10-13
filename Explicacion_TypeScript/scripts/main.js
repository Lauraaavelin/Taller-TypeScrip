var coursesTbody = document.getElementById('courses'); // Nodo tbody que tiene el id="courses"
import { Course } from './course.js';
function renderCoursesInTable(courses) {
    clearCoursesInTable();
    courses.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.name, "</td>\n                           <td>").concat(c.professor, "</td>\n                           <td>").concat(c.credits, "</td>");
        coursesTbody.appendChild(trElement);
    });
    titulo.textContent = "N\u00FAmero de cr\u00E9ditos totales: ".concat(getTotalCredits(courses));
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
var inputSearchBox = document.getElementById('search-box'); // Nodo tbody que tiene el id="courses"
import { dataCourses } from './dataCourses.js';
function applyFilterByName() {
    var text = inputSearchBox.value; // me toco especificar que tipo era porque sino me salia error
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function clearCoursesInTable() {
    if (coursesTbody) {
        while (coursesTbody.firstChild) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
    else {
        console.error("No se encontr\u00F3 una tabla");
    }
}
var btnfilterByName = document.getElementById('button-filterByName'); // Nodo tbody que tiene el id="courses"
btnfilterByName.onclick = function () { return applyFilterByName(); };
var btnfilterByCredits = document.getElementById('button-filterByCreditos'); // Nodo tbody que tiene el id="courses"
btnfilterByCredits.onclick = function () { return applyFilterByCreditos(); };
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
var inputSearchCredit = document.getElementById('search-box2');
function applyFilterByCreditos() {
    var text = inputSearchCredit.value;
    var num = Number(text);
    if (isNaN(num))
        num = -1; // Valor por defecto si el input no es número
    var coursesFiltered = searchCourseByCredits(num, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByCredits(credits, courses) {
    return credits < 0 ? dataCourses : courses.filter(function (c) { return c.credits === credits; });
}
var titulo = document.getElementById('creditos');
renderCoursesInTable(dataCourses);
var tabla = document.getElementById('datos');
import { Estudiante } from './estudiante.js';
function tablaEstudiante(estudiante) {
    // Asegúrate de que el tbody tenga id="datos"
    var atributos = [
        ['Código', estudiante.codigo],
        ['Cédula', estudiante.cedulo],
        ['Edad', "".concat(estudiante.edad, " a\u00F1os")],
        ['Dirección', estudiante.direccion],
        ['Teléfono', estudiante.telefono]
    ];
    atributos.forEach(function (_a) {
        var label = _a[0], valor = _a[1];
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>".concat(label, "</td><td>").concat(valor, "</td>");
        tabla.appendChild(tr);
    });
}
// ---- CREAR Y MOSTRAR ESTUDIANTE ----
var e1 = new Estudiante('1021669854', 202412164, 20, 'Calle 151', '31342568972');
tablaEstudiante(e1);
//# sourceMappingURL=main.js.map