import { Tweet } from "../Classe/Tweet";
import { User } from "../Classe/User";

export class TweetService {
  private tweets: Tweet[] = [];

  addTweet(content: string, type: "normal" | "reply", author: User): Tweet {
    const newTweet = new Tweet(content, type, author);
    this.tweets.push(newTweet);
    return newTweet;
  }

  getTweets() {
    return this.tweets;
  }
}
