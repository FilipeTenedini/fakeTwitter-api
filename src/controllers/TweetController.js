import TweetsRepository from '../repositories/TweetsRepository.js';
import UsersRepository from '../repositories/UsersRepository.js';

class TweetController {
  async create(req, res) {
    const { tweet } = req.body;
    const { user } = req.headers;

    if (!user || !tweet) return res.status(400).send('Todos os campos são obrigatórios!');

    if (typeof (user) !== 'string' || typeof (tweet) !== 'string') return res.status(400).send('Todos os campos são obrigatórios!');

    const userExist = await UsersRepository.findUserByName(user);
    if (!userExist) return res.status(401).send('UNAUTHORIZED');

    await TweetsRepository.create({ user, tweet });

    res.status(201).send('OK');
  }

  async show(req, res) {
    const { user } = req.params;
    const userTweets = await TweetsRepository.listByUser(user);
    res.status(201).send(userTweets);
  }

  async index(req, res) {
    let { page } = req.query;
    let MIN = 0;
    let MAX = 10;
    if (page) {
      page = Number(page);

      if (page < 1) return res.status(400).send('Informe uma página válida!');

      MAX = page * 10;
      MIN = MAX - 10;
    }

    const tweetsList = await TweetsRepository.list(MIN, MAX);

    res.status(201).send(tweetsList);
  }
}

export default new TweetController();
