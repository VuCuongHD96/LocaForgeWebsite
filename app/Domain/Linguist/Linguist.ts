export class Linguist {
  id: string;
  name: string;
  birthdate: Date;
  email: string;

  constructor(id: string, name: string, birthdate: Date, email: string) {
    this.id = id;
    this.name = name;
    this.birthdate = birthdate;
    this.email = email;
  }
}
