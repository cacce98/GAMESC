export interface RespuestaDB {
  datos: Dato[];
}

export interface Dato {
  familia: string;
  id: number;
  imagen: string;
  nombre: string;
  origen: string;
}