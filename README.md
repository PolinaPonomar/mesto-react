# Mesto

## Описание проекта:
Cервис Mesto - интерактивная страница для создания альбома фотографий. Фотографии можно добавлять, удалять и ставить им лайки. Создан в рамках выполнения задания курса по веб-разработке от Яндекс.Практикума.

### Функциональность:
Сайт адаптивен и интерактивен. На сайте можно:
- Редактировать аватар.
- Редактировать информацию о пользователе.
- Добавлять новые фотографии в ленту.
- Лайкать посты любых пользователей.
- Увеличивать фотографии нажатием на них.
- Удалять свои посты.
- Все поп-апы плавно открываются и закрываются, все кнопки подсчвечиваются при наведении на них.

### Какие технологии используются?
- Сайт написан на React, в проекте используются HTML5, CSS3, JavaScript, JSX.
- Благодяря React осуществлена автоматическая сборка с помощью Webpack.
- Код оформлен по методологии БЭМ, организация файловой структуры - Nested. 
- Для создания сеток использовался flex и grid-layout. 
- Все свойства элементов прописывались с учетом адаптивности сайта.
- Плавное открытие и закрытие поп-апов реализовано с помощью css-свойств.
- Проект подключен к серверу, реализовано взаимодействие с API.
- В проекте применяется декларативный подход, реализованы функциональные компоненты, используются хуки useState и useEffect.
- Для оптимизации кода использован контекст, при работе с формами используются управляемые компоненты, рефы.


Для проекта использовались изображения со свободной лицензией с сайта [Pixabay](https://pixabay.com/)

### Получившийся проект можно посмотреть по ссылке:

* [Ссылка на проект](https://polinaponomar.github.io/mesto-react/)


### Инструкция по развёртыванию:
1) Клонируйте репозиторий к себе на компьютер с помощью команды
```
git clone https://github.com/PolinaPonomar/mesto-react.git
```
2) В этом проекте используется библиотека NPM. Если ее нет на вашем компьютере -  [скачайте](https://nodejs.org/en/download/) и установите.
3) Откройте репозиторий проекта и выполните команду
```
npm i
```
4) Чтобы запустить проект, в репозитории проекта выполните команду
```
npm start
```
5) Проект откроется на локальном сервере по адресу: http://localhost:3000/mesto-react
6) Чтобы завершить выполнение локального сервера нажмите Ctrl + C (Win) или Cmd + T (macOS) или Ctrl + T (Linux). Подтвердите действие.
7) Чтобы в следующий раз запустить проект - возращайтесь к пункту 4
8) Готово!
