

export class Serie {
  public numero: number
  public nombre: string;
  public canal: string;
  public temporadas: number;
  public descripcion: string;
  public link:string;
  public imagen: string;

  constructor(num:number,nom:string,can:string,temp:number, des:string,link:string,imag:string){
    
    this.numero=num;
    this.nombre=nom;
    this.canal=can;
    this.temporadas=temp;
    this.descripcion=des;
    this.link=link;
    this.imagen=imag;
  }
  
}


