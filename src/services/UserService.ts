import { User } from "../Classe/User";

export class UserService {
  private users: User[] = [];

  addUser(
    name: string,
    email: string,
    username: string,
    password: string
  ): User {
    const newUser = new User(name, email, username, password);
    this.users.push(newUser);
    return newUser;
  }

  getUsers() {
    return this.users;
  }
}
