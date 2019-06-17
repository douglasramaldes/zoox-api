
#API
* Language - JavaScript (NodeJS)
* Web Framework - Koa
* Database - Mongodb
* Database ODM - Mongoose
* Authentication - OAuth 2.0

#Requerimentos
* node > 6.11.xx
* npm > 3.10.xx

#Instalação
``` bash
npm install
npm run seed
npm run dev
```

#Observações
Para a validação das rotas é necessário que o usuário realize um método POST na seguinte url http://localhost:3000/oauth/token, com o seguinte formato x-form-urlencoded.

Os campos a baixos são obrigatórios ao realizar o envio da requisição para a geração do bearer token:

```bash
client_id:"site",
client_secret:"site@password",
grant_type:"password",
username:"admin@gmail.com",
password:"admin"
```
