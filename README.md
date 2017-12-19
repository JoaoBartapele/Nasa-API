# Nasa-API

Este projeto foi hospedado no [FireBase](https://firebase.google.com/?hl=pt-br) do Google e pode ser acessado por esse link [AQUI](https://asteroids-79f7a.firebaseapp.com/home).

* Documentação da API fonte dos dados [ApiNasa](https://api.nasa.gov/neo/?api_key=2hKjRWO84XXPqnffl8lPZW1WCXbSyQj8q5VDpECf#!/rest%2Fv1%2Ffeed/retrieveNearEarthObjectFeed)

* Projeto desenvolvido em [Angular v5](https://angular.io/).
  * [Booststrap v4-beta.2](https://getbootstrap.com/).
  * [jquery v3.2](https://jquery.com/).
  * [moment.js v2.20](https://momentjs.com/).
  * [ng-bootstrap v1.0-beta.8](https://momentjs.com/).

## Rotas:
 [/Home](https://asteroids-79f7a.firebaseapp.com/home) - Rota com links para acesso das funcionalidades solicitadas.
 
 [/asteroids](https://asteroids-79f7a.firebaseapp.com/asteroids) - Rota listando os asteroides por data(últimos 5 dias por padrão), você pode selecionar a data de exibição(<b>os ateroides só podem ser listados num periodo de máximo de 7 dias</b>).
 
 [/asteroids/fastest](https://asteroids-79f7a.firebaseapp.com/asteroids/fastest) - Rota listando os asteroides mais rápidos dos ultimos 7 dias.
 
 [/alert](https://asteroids-79f7a.firebaseapp.com/asteroids/alert) - Rota listando os alertas de asteroides cadastrados.
 
 [/alert/new](https://asteroids-79f7a.firebaseapp.com/asteroids/alert/new) - Rota para cadatro de alertas de asteroides.



# Servidor de desenvolvimento

## Comandos:

* `git clone https://github.com/JoaoBartapele/Nasa-API.git` clonar o repositório.
* Abrir a pasta destino.
* `npm install` para instalação das dependências.
* `ng serve -o` para iniciar o servidor [localhost]('http://localhost:4200').

## To do:

* Testes unitários.
* Testes e2e.
* Testes documentação utilizando [Compodoc](https://github.com/compodoc/compodoc).
