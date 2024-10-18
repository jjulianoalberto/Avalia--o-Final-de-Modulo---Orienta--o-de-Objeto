import { User } from "./User";

export class Tweet {
  private static idCounter = 1;
  public id: number;
  public content: string;
  public type: "normal" | "reply";
  public likes: User[] = [];
  public replies: Tweet[] = [];
  public author: User;

  constructor(content: string, type: "normal" | "reply", author: User) {
    this.id = Tweet.idCounter++;
    this.content = content;
    this.type = type;
    this.author = author;
  }

  like(user: User) {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    }
  }

  reply(content: string, user: User) {
    const replyTweet = new Tweet(content, "reply", user);
    this.replies.push(replyTweet);
    return replyTweet;
  }
}
