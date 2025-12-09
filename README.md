# Книга контактов (Contact Book)

Express.js приложение для управления контактами. Это контрольная работа, демонстрирующая принципы работы с Express.js, маршрутами, middleware и организацией backend-приложения.

## Функциональность

- Просмотр списка контактов
- Поиск контактов по имени
- Добавление новых контактов
- Обновление существующих контактов
- Удаление контактов
- Веб-интерфейс для взаимодействия с API

## Структура проекта

```
contact-book/
├── controllers/
│   └── contactsController.js
├── data/
│   └── contacts.json
├── middleware/
│   └── logger.js
├── public/
│   └── index.html
├── routes/
│   └── contacts.js
├── server.js
├── package.json
└── README.md
```

## Установка и запуск

1. Установите зависимости:
   ```bash
   npm install
   ```

2. Запустите сервер:
   ```bash
   node server.js
   ```

3. Откройте браузер и перейдите на `http://localhost:3000`

## API Endpoints

### Получить все контакты
- **GET** `/api/contacts`
- **Query параметры:** `search` (поиск по имени)

### Получить контакт по ID
- **GET** `/api/contacts/:id`

### Создать новый контакт
- **POST** `/api/contacts`
- **Body:** `{ "name": "Имя", "phone": "Телефон", "email": "Email" }`

### Обновить контакт
- **PUT** `/api/contacts/:id`
- **Body:** `{ "name": "Имя", "phone": "Телефон", "email": "Email" }`

### Удалить контакт
- **DELETE** `/api/contacts/:id`

## Middleware

- **Logger:** Логирует все входящие запросы в консоль
- **express.json():** Парсит JSON тела запросов
- **express.urlencoded():** Парсит URL-encoded тела запросов
- **express.static():** Раздаёт статические файлы из папки `public`

## Данные

Контакты хранятся в файле `data/contacts.json`. Каждый контакт имеет следующие поля:
- `id` (number): Уникальный идентификатор
- `name` (string): Имя контакта
- `phone` (string): Номер телефона
- `email` (string): Email адрес (опционально)

## Скриншоты

(Добавьте скриншоты приложения здесь после тестирования)