import UserRepository from '../repositories/UsersRepository.js';

class UserController {
  async create(req, res) {
    const { username, avatar } = req.body;

    if (!username || !avatar) return res.status(400).send('Todos os campos são obrigatórios!');

    if (typeof (username) !== 'string' || typeof (avatar) !== 'string') return res.status(400).send('Todos os campos são obrigatórios!');

    // const userExist = await UserRepository.findUserByName(username);

    // if (userExist) return res.status(400).send('Este nome de usuário já está em uso.');

    await UserRepository.create({ username, avatar });

    res.status(201).send('OK');
  }
}

export default new UserController();
