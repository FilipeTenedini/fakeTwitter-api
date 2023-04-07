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
}

export default new TweetController();
