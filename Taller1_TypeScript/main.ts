const bodyTabla: HTMLElement= document.getElementById('series')!;
const titulo: HTMLElement = document.getElementById('total')!;

import {Serie} from './serie.js';
import{series} from './datosSeries.js';
function ponerValores(series: Serie[]):void{
    clearTable();
    series.forEach(s=>{
         let trElement= document.createElement("tr");
    trElement.innerHTML=`<td>${s.numero}</td>
                         <td>${s.nombre}</td>
                         <td>${s.canal}</td>
                         <td>${s.temporadas}</td>`;
    
    bodyTabla.appendChild(trElement);
    });
   titulo.textContent=`Número de temporadas totales: ${totalTemporadas(series)}`;
}
function clearTable():void{
    if(bodyTabla){
        while(bodyTabla.firstChild){
            bodyTabla.removeChild(bodyTabla.firstChild);
        }
    }
}

function totalTemporadas(series: Serie[]):number{
    let total: number=0;
    series.forEach((serie)=> total=total+serie.temporadas);
    return total;
}


ponerValores(series);