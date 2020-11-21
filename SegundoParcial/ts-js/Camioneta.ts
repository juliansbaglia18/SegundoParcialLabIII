namespace SP{
 
    export class Camioneta implements Vehiculo{
    
        id:number;
        marca:string;
        modelo:string;
        precio:number;
        cuatroXcuatro:boolean;
        tipo:string;
        
        constructor(id?: number,marca?: string, modelo?: string, precio?: number, cuatroXcuatro?:boolean){
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.cuatroXcuatro = cuatroXcuatro;
            this.tipo = "Camioneta";
        }
        toString(){
            return "Camioneta";
          }
    }

}