import { User } from "./Classe/User";
import { Tweet } from "./Classe/Tweet";
import { UserService } from "./services/UserService";
import { TweetService } from "./services/TweetService";

const userService = new UserService();
const tweetService = new TweetService();

// Criando usuários
const user1 = userService.addUser(
  "Alice",
  "alice@example.com",
  "alice",
  "senha123"
);
const user2 = userService.addUser("Bob", "bob@example.com", "bob", "senha456");
const user3 = userService.addUser(
  "Charlie",
  "charlie@example.com",
  "charlie",
  "senha789"
);

// Criando tweets
const tweet1 = tweetService.addTweet("Hello World!", "normal", user1);
const tweet2 = tweetService.addTweet("This is a reply", "reply", user2);

// Curtindo tweets
tweet1.like(user2);
tweet1.like(user3);

// Respondendo a tweets
tweet1.reply("Thanks for the reply!", user3);

// Exibindo tweets
console.log(tweet1);
console.log(tweet2);
