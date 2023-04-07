// conexão com o mock.
const users = [];

class UsersRepository {
  create({ username, avatar }) {
    return new Promise((resolve) => {
      users.push({
        username, avatar,
      });

      resolve();
    });
  }

  findUserByName(name) {
    return new Promise((resolve) => resolve(
      users.find((user) => user.username === name),
    ));
  }
}

export default new UsersRepository();
