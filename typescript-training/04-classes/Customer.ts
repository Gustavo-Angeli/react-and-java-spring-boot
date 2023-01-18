export class Customer {
  // private _firstName: string;
  // private _lastName: string;

  // constructor(firstName: string, lastName: string) {
  //   this._firstName = firstName;
  //   this._lastName = lastName;
  // }

  constructor(private _firstName: string, private _lastName: string) {}

  get firstName(): string {
    return this._firstName;
  }
  get lastName(): string {
    return this._lastName;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
  }
  set lastName(lastName: string) {
    this._lastName = lastName;
  }
}
