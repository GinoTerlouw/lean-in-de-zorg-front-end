export class User {
  id: number;
  uuid: string;
  email: string;
  name: string;
  privilege: number;
  authToken: string;

  constructor(id: number, uuid: string, email: string, name: string, privilege: number, authToken: string) {
    this.id = id;
    this.uuid = uuid;
    this.email = email;
    this.name = name;
    this.privilege = privilege;
    this.authToken = authToken;
  }
}
