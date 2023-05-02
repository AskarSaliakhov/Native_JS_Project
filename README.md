# Project1_Native_JS
Первый проект состоит из Native Js .
<br />
Это MVC - проект: <br />
В src/js/init/.. Создается шаблоны <br />
В src/js/app/.. Работа с сервером <br />
В watchers.js  Следим за изменениями и предоставляем клиенту <br />

1) Получение данных с помощью : <br />
   const response = await fetch(URL)
   const responseData = await response.json() <br />
   Все это в try catch finally.
   Поподробнее в директории src/js/app/ ...
2) Используется библиотека Watch. <br />
