
const coursesTbody: HTMLElement = document.getElementById('courses')!; // Nodo tbody que tiene el id="courses"
import { Course } from './course.js';
function renderCoursesInTable(courses: Course[]): void {
  clearCoursesInTable();
  courses.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.name}</td>
                           <td>${c.professor}</td>
                           <td>${c.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });

  titulo.textContent = `Número de créditos totales: ${getTotalCredits(courses)}`;
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}


const inputSearchBox: HTMLElement = document.getElementById('search-box')!; // Nodo tbody que tiene el id="courses"
import { dataCourses } from './dataCourses.js';

function applyFilterByName() { 
   let text = (<HTMLInputElement>inputSearchBox).value; // me toco especificar que tipo era porque sino me salia error
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function clearCoursesInTable(){
  if (coursesTbody) {
            while (coursesTbody.firstChild) {
                coursesTbody.removeChild(coursesTbody.firstChild);
            }
        }
    else {
        console.error(`No se encontró una tabla`);
    }

}

const btnfilterByName: HTMLElement = document.getElementById('button-filterByName')!; // Nodo tbody que tiene el id="courses"

btnfilterByName.onclick = () => applyFilterByName();

const btnfilterByCredits: HTMLElement = document.getElementById('button-filterByCreditos')!; // Nodo tbody que tiene el id="courses"

btnfilterByCredits.onclick = () => applyFilterByCreditos();



function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}

const inputSearchCredit: HTMLElement = document.getElementById('search-box2')!;

function applyFilterByCreditos() {
  let text = (<HTMLInputElement>inputSearchCredit).value;
  let num: number = Number(text);
  if (isNaN(num)) num = -1; // Valor por defecto si el input no es número
  
  let coursesFiltered: Course[] = searchCourseByCredits(num, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByCredits(credits: number, courses: Course[]): Course[] {
  return credits < 0 ? dataCourses : courses.filter(c => c.credits === credits);
}




const titulo: HTMLElement = document.getElementById('creditos')!;

renderCoursesInTable(dataCourses);

const tabla: HTMLElement = document.getElementById('datos')!;

import { Estudiante } from './estudiante.js';
function tablaEstudiante(estudiante: Estudiante) {
  // Asegúrate de que el tbody tenga id="datos"
  const atributos = [
    ['Código', estudiante.codigo],
    ['Cédula', estudiante.cedulo],
    ['Edad', `${estudiante.edad} años`],
    ['Dirección', estudiante.direccion],
    ['Teléfono', estudiante.telefono]
  ];

  atributos.forEach(([label, valor]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${label}</td><td>${valor}</td>`;
    tabla.appendChild(tr);
  });
}


// ---- CREAR Y MOSTRAR ESTUDIANTE ----
let e1: Estudiante = new Estudiante('1021669854', 202412164, 20, 'Calle 151', '31342568972');
tablaEstudiante(e1);