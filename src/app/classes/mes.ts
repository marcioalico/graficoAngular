export class Mes {
    /* Modelo TypeScript */
    constructor(
        private _nombre: string,
        private _dias: number
    ) { }

    get nombre(): string { // get por defecto
        return this._nombre;
    }

    set nombre(name: string) { // set por defecto
        this._nombre = name;
    }

    get dias(): number { // get por defecto
        return this._dias;
    }

    set dias(dias: number) { // set por defecto
        this._dias = dias;
    }
}