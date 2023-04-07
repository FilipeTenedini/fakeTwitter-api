const tweets = [];

class TweetsRepository {
  create({ username, tweet }) {
    return new Promise((resolve) => {
      tweets.push({ username, tweet });
      resolve();
    });
  }
}

export default new TweetsRepository();
