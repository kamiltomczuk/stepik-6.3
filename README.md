# My Express.js App with PostgreSQL

## Uruchamianie środowiska

Aby uruchomić środowisko aplikacji z bazą danych Postgres, użyj Docker Compose:

```bash
docker-compose up --build

```

Aby przetestować aplikację uruchom tą komendę:

```bash
docker build -t my-express-app-test .
docker run --rm --network=my-express-app_default -e DB_HOST=db my-express-app-test
```
