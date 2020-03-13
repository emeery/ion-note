export class Notas {
    constructor(
        public id: string,
        public titulo: string,
        public descripcion: string,
        // public disponibleDesde: Date,
        // public disponibleA: Date,
        public userId: string
    ) {}
}