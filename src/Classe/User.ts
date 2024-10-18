export class User {
  private static idCounter = 1;
  public id: number;
  public name: string;
  public email: string;
  public username: string;
  private password: string;
  public followers: User[] = [];

  constructor(name: string, email: string, username: string, password: string) {
    this.id = User.idCounter++;
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
  }

  follow(user: User) {
    if (user !== this && !this.followers.includes(user)) {
      this.followers.push(user);
    }
  }

  getFollowing() {
    return this.followers;
  }
}
