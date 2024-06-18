# Desafio 01 | Imersão 18 fullcycle
## API de parceiro

---
## Informações do desafio
**Neste desafio, você deverá clonar a aplicação Nest.js do projeto da Imersão Full Cycle e implementar algumas coisas:**

- [x] A aplicação está dividida em 2 apps (partner1 partner2) + a lib core. Você deverá criar um projeto novo e condensar apenas o partner1 e a lib core no seu novo projeto, ou seja, teremos um projeto Nest.js convencional. Teremos módulos events, spots, prisma, auth.
- [x] A aplicação rodará novamente na porta convencional 3000.
- [x] Use Docker Compose como usamos na aula
- [x] Use apenas a variável MYSQL_DATABASE no docker-compose.yaml em vez do docker-entrypoint-initdb.d
- [x] Validar os dados de entrada de alguns endpoints, ao passar os dados inválidos o Nest.js precisa retornar o status 422 informando os problemas encontrados

  - [x] **POST /events**
    - name: obrigatório, string, máximo 255
    - description: obrigatório, string, máximo 255
    - date: obrigatório, string, formato ISO8601
    - price: obrigatório, numbero, mínimo 0

  - [x] **POST spots**
    - name: obrigatório, string, máximo 255

  - [x] **POST /events/:eventId/reserve**
    - spots: obrigatório, array, string
    - ticket_kind: obrigatório, precisa ter os valores “full” ou “half”

- [x] Tratar melhor os erros da operação de reserva via recurso exception filter do Nest.js
- [x] Quando os spots passados não existirem lançar um erro 404 com body “{message: Spots not exists: A1, C3, D5, etc}”
- [x] Quando os spots passados não existirem disponíveis para reservar um erro 400 com body “{message: Spots A1 is not available for reservation”
- [x] Quando lançar um erro no trecho transaction do prisma, precisa responder com status 400 + a mensagem do erro

Compartilhe o link do repositório Git.

Aproveite e um dê uma estrelinha no repositório da Imersão!

Bons estudos!
