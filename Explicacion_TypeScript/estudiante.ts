
export class Estudiante {
  cedulo: string;
  codigo: number;
  edad: number;
  direccion: string;
  telefono: string

  constructor(cedula:string,codig:number,edad:number,direc:string,tele:string){
    this.cedulo=cedula;
    this.codigo=codig;
    this.edad=edad;
    this.direccion=direc;
    this.telefono=tele;

  }
  
}
