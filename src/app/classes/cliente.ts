export class Cliente {
    /* Modelo TypeScript */
    constructor(
        private _nombre: string,
        private _edad: number,
        private _status: boolean
    ) { }

    get nombre(): string { // get por defecto
        return this._nombre;
    }

    set nombre(name: string) { // set por defecto
        this._nombre = name;
    }

    get edad(): number { // get por defecto
        return this._edad;
    }

    set edad(edad: number) { // set por defecto
        this._edad = edad;
    }

    get status(): boolean { // get por defecto
        return this._status;
    }

    set status(activo: boolean) { // set por defecto
        this._status = activo;
    }
}