export class AlertModel {

  private _date: string | Date;
  private _name: string;
  private _email: string;
  private _velocity: number;

  constructor(
    date: string | Date,
    name: string,
    email: string,
    velocity: number
  ) {
    this.date = date;
    this.name = name;
    this.email = email;
    this.velocity = velocity;
  }


  public get date(): string | Date  {
    return this._date;
  }

  public set date(value: string | Date ) {
    this._date = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get velocity(): number {
    return this._velocity;
  }

  public set velocity(value: number) {
    this._velocity = value;
  }

}
