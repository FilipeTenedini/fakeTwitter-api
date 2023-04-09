## Meu Primeiro projeto utilizando NodeJS
  
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
- [ ]  Deve receber (pelo `body` da request), o parametro `tweet`:
- [ ]  Deverá recebr o nome de usuário por meio de um header user. 

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

<details>
<summary>
GET /tweets/USERNAME
</summary>

- [ ]  Retornar todos os tweets publicados do usuário recebido por parâmetro de rota em um array no formato abaixo:
```json
[
	{
		username: "bobesponja",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
	  tweet: "Eu amo hambúrguer de siri!"
	},
	{
		username: "bobesponja",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
	  tweet: "Eu sou amigo do Patrick, ele é uma estrela!"
	}
]
```
- [ ] Se não houver nenhum tweet deste usuário, retornar um array vazio.
</details>

<details>
<summary>
GET /tweets com paginação
</summary>

- [ ]  Esse endpoint deverá passar a receber uma página identificada via query string, no formato `?page=1`.
- [ ]  Modifique o endpoint para retornar corretamente os tweets da “página” (`page`) atual.
- [ ]  A primeira página corresponde aos últimos 10 tweets, a segunda do 11 ao 20, a terceira do 21 ao 30, etc.
- [ ]  Lembre-se de validar se o valor de `page` (query string) foi enviado e tem valor **maior ou igual a** **1.** Caso o valor não seja um número maior que 1, deverá responder com a mensagem “Informe uma página válida!” e com o status code 400 (BAD REQUEST).
- [ ]  O parâmetro `page` continua opcional. Caso não seja enviado, deverá comportar como no requisito original (200, retornando últimos 10 tweets).
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
  
	

