## Meu Primeiro projeto utilizando NodeJS
### Você pode acessar a aplicação neste link:
  
<br><br><br>

<p align="center">
  |&nbsp;&nbsp;&nbsp<a href="#Projeto">Projeto</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Aprendizados">Aprendizados</a>&nbsp;&nbsp;&nbsp;&nbsp;
</p>
<br><br>

<div align="center">
	
</div>

<h1 id="Projeto"> 💻 Projeto</h1>

<details>
<summary>    
Geral
</summary>

- [ ]  A porta utilizada pelo servidor deve ser a 5000.
- [ ]  Seu projeto deve ter, obrigatóriamente, os arquivos `package.json` e `package-lock.json`, que devem estar na raiz do projeto. Eles devem conter todas as **dependências** do projeto.
- [ ]  Adicione o código que inicia o servidor, com a função `listen`, no arquivo `src/app.js`.
- [ ]  Adicione um script no `package.json` para iniciar o servidor rodando `npm start`

</details>
 
<details>
<summary>
Armazenamento e formato dos dados
</summary>

- [ ]  Para persistir os dados (usuários e tweets), **utilize variáveis globais em memória**
- [ ]  O formato de um **usuário** deve ser:

```json
{
    username: 'bobesponja', 
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png" 
}
```
- [ ]  O formato de um tweet deve ser:

```json
{
    username: "bobesponja",
  tweet: "Eu amo hambúrguer de siri!"
}
```
</details>
 
<details>
<summary>
POST /sign-up
</summary>

- [ ]  Deve receber (pelo body da request), um parâmetro username e um avatar, contendo o nome do username do usuário e a sua foto de avatar:

```json
{
    username: "bobesponja",
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png"
}
```

- [ ]  Salvar esse usuário num array de usuários do servidor
- [ ]  Por fim, retornar a mensagem `“OK”`
</details>

<details>
<summary>
POST /tweets
</summary>

- [ ]  Se o usuário não estiver cadastrado (username não fez `sign-up` anteriormente), deve retornar a mensagem `“UNAUTHORIZED”`
- [ ]  Deve receber (pelo `body` da request), os parâmetros `username` e `tweet`:

```json
{
    username: "bobesponja",
    tweet: "Eu amo hambúrguer de siri!"
}
```

- [ ]  Salvar esse tweet num array de tweets do servidor
- [ ]  Por fim, retornar a mensagem `“OK”`

</details>

<details>
<summary>
GET /tweets
</summary>

- [ ]  Retornar os 10 últimos tweets publicados
```json
[
	{
		username: "bobesponja",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	}
]
```
- [ ]  Caso não tenha nenhum tweet cadastrado, retorna um array vazio
</details>


<h1 id="Tecnologias">🚀 Tecnologias</h1>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- NodeJS
- Express


<h1 id="Aprendizados">🧠 Aprendizados</h1>

- Primeiro projeto utilizando NodeJS 
- Desenvolvimento back end
- Praticando commonJS e ES6+ imports/exports styles.
- Desenvolvimento de APIs
  
	
<details>
<summary>    
  
  
# Como executar o projeto
  
  
</summary>
  # Getting Started with Create React App

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  ## Available Scripts

  In the project directory, you can run:

  ### `npm start`

  Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  The page will reload when you make changes.\
  You may also see any lint errors in the console.

  ### `npm test`

  Launches the test runner in the interactive watch mode.\
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  ### `npm run build`

  Builds the app for production to the `build` folder.\
  It correctly bundles React in production mode and optimizes the build for the best performance.

  The build is minified and the filenames include the hashes.\
  Your app is ready to be deployed!

  See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  ### `npm run eject`

  **Note: this is a one-way operation. Once you `eject`, you can't go back!**

  If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

  You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

  ## Learn More

  You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  To learn React, check out the [React documentation](https://reactjs.org/).

  ### Code Splitting

  This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

  ### Analyzing the Bundle Size

  This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

  ### Making a Progressive Web App

  This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

  ### Advanced Configuration

  This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

  ### Deployment

  This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

  ### `npm run build` fails to minify

  This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
</details>
