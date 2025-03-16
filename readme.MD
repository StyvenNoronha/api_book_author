# API de Autores e Livros

## Descrição
Esta API permite gerenciar autores e livros utilizando Express.js, Prisma e Zod para validação de dados.

## Tecnologias Utilizadas
- Node.js
- Express.js
- Prisma ORM
- Zod para validação de dados


## Endpoints

### Autores

- **Criar Autor**
  - **POST** `/authors`
  - **Body:**
    ```json
    {
      "name": "Nome do Autor",
      "birthdate": "dd/mm/yyyy"
    }
    ```
  - **Resposta:**
    ```json
    {
      "name": "Nome do Autor",
      "birthdate": "yyyy-mm-ddT00:00:00.000Z"
    }
    ```

- **Listar Autores**
  - **GET** `/authors`
  - **Resposta:** Array de autores

- **Buscar Autor por ID**
  - **GET** `/authors/:id`
  - **Resposta:** Dados do autor

- **Atualizar Autor**
  - **PUT** `/authors/:id`
  - **Body:**
    ```json
    {
      "name": "Novo Nome",
      "birthdate": "dd/mm/yyyy"
    }
    ```
  - **Resposta:**
    ```json
    {
      "name": "Novo Nome",
      "birthdate": "yyyy-mm-ddT00:00:00.000Z"
    }
    ```

- **Deletar Autor**
  - **DELETE** `/authors/:id`
  - **Resposta:**
    ```json
    {
      "message": "autor deletado"
    }
    ```

### Livros

- **Criar Livro**
  - **POST** `/books`
  - **Body:**
    ```json
    {
      "title": "Título do Livro",
      "publication_year": 2024,
      "author_id": "UUID do autor"
    }
    ```
  - **Resposta:**
    ```json
    {
      "book": {
        "title": "Título do Livro",
        "publication_year": 2024,
        "author_id": "UUID"
      }
    }
    ```

- **Listar Livros**
  - **GET** `/books`
  - **Resposta:** Array de livros

- **Buscar Livro por ID**
  - **GET** `/books/:id`
  - **Resposta:** Dados do livro

- **Atualizar Livro**
  - **PUT** `/books/:id`
  - **Body:**
    ```json
    {
      "title": "Novo Título",
      "publication_year": 2025
    }
    ```
  - **Resposta:**
    ```json
    {
      "message": "atualizado com sucesso"
    }
    ```

- **Deletar Livro**
  - **DELETE** `/books/:id`
  - **Resposta:**
    ```json
    {
      "message": "Livro deletado"
    }
    ```

## Autor
Desenvolvido por Styven Cesar Noronha.

