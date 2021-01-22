![GoStack](https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png)

<h2 align="center">GoStack - Desafio Fundamentos NodeJS</h2>

# Sobre

**Este projeto se trata de uma API Restfull desenvolvida como desafio da Fase 1 do curso [GoStack](https://pages.rocketseat.com.br/gostack),
ministrado pela [RocketSeat](https://rocketseat.com.br/)**

# Instruções
**Para executar a API, dentro da pasta do projeto, execute o seguinte comando para instalar as
dependências**
```
yarn install
```

**Após a instalação das dependências, para inicialiar a aplicação, dentro da pasta do projeto,
execute o seguinte comando:**
```
yarn dev:server
```

# API

### Transactions

-   **Listar transactions**

```
# GET /transactions

{
    "transactions": [
        {
            "id": "821f8176-2314-41a3-b520-b5fb3822d61e",
            "title": "Salary",
            "value": "5000",
            "type": "income"
        },
        {
            "id": "41e0550e-0416-46fb-8158-611c8954f807",
            "title": "Credit card",
            "value": "500",
            "type": "outcome"
        }
    ],
    "balance": {
        "income": "5000",
        "outcome": "500",
        "total": 4500
    }
}
```

-   **Salvar transaction**
> O atributo "type" pode assumir somente um dos dois valores: "income" ou "outcome"
```
# POST /transactions

{
    "title": "Salary",
    "type": "income",
    "value": "5000"
}
```

# Testes Funcionais

**Para a execução dos testes das rotas da API, com o código fonte baixado, execute o seguinte comando**:

```
yarn test
```

</br>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js?style=social">
  </a>
</p>
