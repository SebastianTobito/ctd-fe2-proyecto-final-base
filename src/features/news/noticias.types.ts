export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: number | string;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
}

export type PropsModal = {
    showModal: INoticiasNormalizadas | null;
    cerrar: () => void;
    suscribir: () => void;
};