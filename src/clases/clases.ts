export class Persona {
	private _nombre: string;
	private _fechaNac: string;

	constructor(nombre: string, fechaNac: string) {
		this._nombre = nombre;
		this._fechaNac = fechaNac;
	}

	public get nombre(): string {
		return this._nombre;
	}
	public set nombre(v: string) {
		this._nombre = v;
	}

	public get edad(): number {
		return this.getEdad(this._fechaNac);
	}

	public get fechaNac(): string {
		return this._fechaNac;
	}
	public set fechaNac(v: string) {
		this._fechaNac = v;
	}

	private getEdad(dateString: string) {
		const hoy = new Date();
		const fechaNacimiento = new Date(dateString);
		let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
		const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
		if (
			diferenciaMeses < 0 ||
			(diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
		) {
			edad--;
		}
		return edad;
	}
}
