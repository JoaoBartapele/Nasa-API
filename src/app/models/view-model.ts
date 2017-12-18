export class ViewModel {

  private _name: string;
  private _date: string | Date;
  private _velocity: number;
  private _hazard: boolean;

  constructor(
    name: string,
    date: string | Date,
    velocity: number,
    hazard: boolean
  ) {
    this.name = name;
    this.date = date;
    this.velocity = velocity;
    this.hazard = hazard;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string ) {
    this._name = value;
  }

  public get date(): string| Date  {
    return this._date;
  }

  public set date(value: string | Date ) {
    this._date = value;
  }

  public get velocity(): number {
    return this._velocity;
  }

  public set velocity(value: number) {
    this._velocity = value;
  }

  public get hazard(): boolean {
    return this._hazard;
  }

  public set hazard(value: boolean) {
    this._hazard = value;
  }

}
