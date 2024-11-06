# Техническое задание на позицию: Junior Frontend Developer.

## <a name="nav"></a>Навигация:

- [Описание](#description)
- [Установка](#installation)

## <a name="description"></a>Задание: [⬆️](#nav)

Реализовать приложение To-do List. (пример приложения в фото ниже)

## Обязательно:

Приложение написано при использовании библиотеки React.
Реализован функционал:

1. Добавления задачи ✅
2. Удаление задачи ✅
3. Удаление всех задач ✅

## Опционально:

1. Реализовать разделы : 
- Текущие дела. ✅
- Все дела. ✅
- Выполненные дела. ✅
- Корзина. ✅
2. Реализовать страницу авторизации c отдельным роутом.
Если мы уже логинились, то после перезагрузки страницы нас не должно выкидывать на страницу логина.
	JWT прикручивать не надо.
	Достаточно сделать проверку на логин: admin и пароль: admin
3. После перезагрузки страницы данные по делам (задачам) остаются. ✅
4. Использовать TypeScript. ✅
5. Использовать Redux-toolkit.

  ![image](https://github.com/user-attachments/assets/2cdc292f-de5e-40d5-90b7-a2a9e403cecb)



## <a name="installation"></a>Установка: [⬆️](#nav)

1. Склонируйте репозиторий:
```
git clone https://github.com/BolotnikovMS/task-todo.git
```
  - При необходимости добавьте в конце `./` чтобы не создавалась дополнительная папка.
2. Установите зависимости:
```
npm install
```
3. Запустите приложение:
 ```
npm run dev
```
