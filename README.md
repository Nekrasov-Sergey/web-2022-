# web-2022

## Описание
Лабораторная работа №3 по курсу "Разработка интернет-приложений" 2022 года

## Запуск миграций
Установка goose:
- `go install github.com/pressly/goose/v3/cmd/goose@latest`

Создание миграций в папке migrations:
- `goose create db_freebie_shop sql`

Запуск миграций:
- `go run .\cmd\migrate\main.go`

## Создание .env файла
- `cp .\.dist.env .env`

## Запуск сервиса через терминал
### Вариант №1
- `go run .\cmd\freebie-shop\main.go`

### Вариант №2
- `go build .\cmd\freebie-shop\main.go`

- `\main.exe`

## Сгенерировать swagger
- `swag init -g \cmd\freebie-shop\main.go`

## Запросы
### GET
Получить список всех промокодов:
- http://127.0.0.1:8080/promos/get

### POST
Добавить промокод:
- http://127.0.0.1:8080/promos/create

Добавить рандомные промокоды:
- http://127.0.0.1:8080/promos/create/random






