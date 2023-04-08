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
  
	

