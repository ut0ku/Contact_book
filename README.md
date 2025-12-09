<img width="954" height="441" alt="msedge_0XSZRxFJLG" src="https://github.com/user-attachments/assets/007148e2-941e-4019-a235-1aef28a72cff" /># Книга контактов

Простое приложение для книги контактов, построенное с использованием Express.js.

## Скриншоты

<img width="954" height="441" alt="msedge_WCShKO6YHD" src="https://github.com/user-attachments/assets/8cad6247-6ab8-4e62-8b72-5c65a2144c20" />

После добавления контактов
<img width="954" height="441" alt="msedge_q8MZPRgb6Y" src="https://github.com/user-attachments/assets/655b0241-a1f9-4c0c-804a-6b01201e46cd" />

Поиск контактов
<img width="954" height="441" alt="msedge_3sFIdiiS3f" src="https://github.com/user-attachments/assets/6f19b390-0009-4430-a9c0-bbbbea67d2b4" />

Удаление контакта
<img width="954" height="441" alt="msedge_7EJOjLjv7U" src="https://github.com/user-attachments/assets/a0a88d9a-70b9-4ae1-bbac-c2165ef23d1a" />

Получение всех контактов через api запрос
<img width="954" height="441" alt="msedge_0XSZRxFJLG" src="https://github.com/user-attachments/assets/5ee21d70-2395-46a1-9d72-823e389c1a40" />


## Функции

- Добавление, просмотр, поиск и удаление контактов
- RESTful API с маршрутами GET, POST, PUT, DELETE
- Раздача статических файлов
- Собственный middleware для логирования

## Установка

1. Клонируйте репозиторий
2. Запустите `npm install`
3. Запустите `npm start` или `node server.js`

## API Endpoints

- GET /api/contacts - Получить все контакты (с опциональным поиском)
- GET /api/contacts/:id - Получить контакт по ID
- POST /api/contacts - Добавить новый контакт
- PUT /api/contacts/:id - Обновить контакт
- DELETE /api/contacts/:id - Удалить контакт

## Статический сайт

Статическая версия доступна на GitHub Pages: https://ut0ku.github.io/Contact_book/

