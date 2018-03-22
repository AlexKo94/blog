**ЗАПУСК ПРОЕКТА**:

1. npm install в корне проекта
2. Должен быть установлен MongoDB
2. Путь к базе данных MongoDB **mongodb://localhost/blog**

# Пользовательские функции

### getArrPages()

> Функция для формирования массива страниц для пагинации

__Входные параметры__

1. count - количество записей
2. page - номер текущей страницы
3. limit - количество объектов на одной странице
4. quontity - количество ссылок слева и справа от текущей страницы

__Возвращает__
> Массив из страниц `var arr = [1,2,3];`

### chechAcsess()

> Middleware для проверки авторизации пользователя. Подключается там где она требуется `app.post('/article',urlencodedParser,func.**chechAcsess**,postArticle);`

__Входные параметры__

1. req - объект запроса
2. res - объект ответа
3. next - функция перехода к следующей функции обработки запроса

__Возвращает__
> Переходит по цепочке дальше или возвращает ошибку при отсутствии сессии авторизованного пользователя

### filterDate()

> Производит преобразование даты вида `Thu Mar 22 2018 14:42:40 GMT+0300 (RTZ 2 (зима))` в `22.03.2018` 

__Входные параметры__

1. date - объект даты `new Date()`

__Возвращает__
> Строку в виде `ДД.ММ.ГГГ`

# Модели

### user

#### Методы










