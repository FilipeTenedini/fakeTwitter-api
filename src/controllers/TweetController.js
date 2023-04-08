import TweetsRepository from '../repositories/TweetsRepository.js';
import UsersRepository from '../repositories/UsersRepository.js';

class TweetController {
  async create(req, res) {
    const { username, tweet } = req.body;

    if (!username || !tweet) return res.status(400).send('Todos os campos são obrigatórios!');

    if (typeof (username) !== 'string' || typeof (tweet) !== 'string') return res.status(400).send('Todos os campos são obrigatórios!');

    const userExist = await UsersRepository.findUserByName(username);
    if (!userExist) return res.status(401).send('UNAUTHORIZED');

    await TweetsRepository.create({ username, tweet });

    res.status(201).send('OK');
  }

  async show(req, res) {
    const { username } = req.params;
    const userTweets = await TweetsRepository.listByUser(username);
    res.status(201).send(userTweets);
  }

  async index(req, res) {
    let { page } = req.query;
    let MIN = 0;
    let MAX = 10;
    if (page) {
      page = Number(page);

      if (page < 1) return res.status(400).send('Informe uma página válida!');

      MIN = page * 10;
      MAX = MIN + 10;
    }

    const tweetsList = await TweetsRepository.list(MIN, MAX);

    res.status(201).send(tweetsList);
  }
}

export default new TweetController();
