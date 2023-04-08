import tweets from '../mock/tweetsMock.js';
import users from '../mock/usersMock.js';

class TweetsRepository {
  create({ username, tweet }) {
    return new Promise((resolve) => {
      tweets.push({ username, tweet });
      resolve();
    });
  }

  list() {
    return new Promise((resolve) => {
      const tweetsList = tweets.reverse().slice(0, 10);

      const lastTweets = tweetsList.map((userTweet) => {
        const selectedUser = users.find((user) => user.username === userTweet.username);
        return {
          ...selectedUser,
          tweet: userTweet.tweet,
        };
      });

      resolve(lastTweets);
    });
  }

  listByUser(name) {
    return new Promise((resolve) => {
      const userTweets = tweets.filter((tweet) => tweet.username === name && tweet);
      resolve(userTweets);
    });
  }
}

export default new TweetsRepository();
