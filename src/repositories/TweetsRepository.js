import tweets from '../mock/tweetsMock.js';
import users from '../mock/usersMock.js';

class TweetsRepository {
  create({ user, tweet }) {
    return new Promise((resolve) => {
      tweets.push({ user, tweet });
      resolve();
    });
  }

  list(min, max) {
    return new Promise((resolve) => {
      const tweetsList = [...tweets].reverse().slice(min, max);
      const lastTweets = tweetsList.map((userTweet) => {
        const selectedUser = users.find((user) => user.username === userTweet.user);
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
      const selectedTweets = tweets.filter((tweet) => tweet.user === name && tweet);
      const userTweets = selectedTweets.map((userTweet) => {
        const selectedUser = users.find((user) => user.username === userTweet.user);
        return {
          ...selectedUser,
          tweet: userTweet.tweet,
        };
      });

      resolve(userTweets);
    });
  }
}

export default new TweetsRepository();
