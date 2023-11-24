import { IInstitucion } from "./institution.interface";

export interface IAuthor {
    id?: number;
    nombre: string;
    apellido: string;
    direccion: string;
    activo: boolean;
    modificado?: Date
    idInstitucion?: number
    institucion?: IInstitucion
}