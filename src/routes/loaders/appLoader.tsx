import { redirect } from 'react-router'

// custom modules
import { account } from '../../lib/appwrite'
import type { IResponseConversation } from '..'

export const appLoader = async (): Promise<
  Response | IResponseConversation
> => {
  const data: IResponseConversation = {
    user: {},
    conversation: {},
  }

  try {
    data.user = await account.get()
  } catch (error) {
    console.log(`Error getting user session: ${error}`)

    return redirect('/login')
  }

  // получаем данные из БД и запихиваем их в data
  data.conversation = {
    id: 1,
    title: 'Chat 1',
    chats: [
      {
        id: 1,
        title: 'My Chat about JS',
        user_prompt: `My something prompt:
         git add .
         git rm --cached vite.config.js
        fatal: pathspec 'vite.config.js did not match any files
         git rm --cached vite.config.ts
        rm 'vite.config.ts'
         git rm --cached vite.config.ts

         npm i axios

        up to date, audited 245 packages in 2s

        58 packages are looking for funding

        found 0 vulnerabilities
         npm uninstall axios

        up to date, audited 245 packages in 1s

        58 packages are looking for funding
        `,
        ai_response: `Fake response from AI service in markdown format: 

# Что такое JavaScript (JS)?

JavaScript (JS) — это **высокоуровневый, интерпретируемый** язык программирования, который является одним из **трёх столпов веб-разработки** (наряду с HTML и CSS). Он предназначен в первую очередь для **интерактивных веб-страниц**, но используется и в других областях, таких как серверная разработка, мобильные приложения и игры.

## Краткая история
- **Создан в 1995 году** Бренданом Эйхом (Netscape) как "Mocha", затем переименован в "LiveScript" и "JavaScript" для маркетинга (несмотря на отсутствие связи с Java).
- **Стандартизирован** как ECMAScript (ES) с версии ES1 в 1997 году. Современные версии: ES6 (2015) с arrow-функциями, promises и т.д.
- **Эволюция**: От клиентского скриптинга к полноценному фреймворку (Node.js для сервера).

## Основные характеристики
- **Динамическая типизация**: Переменные не требуют явного указания типа (var x = 5; x = "строка";).
- **Прототипное наследование**: Объекты наследуют свойства от прототипов.
- **Функциональный и объектно-ориентированный**: Поддерживает замыкания, first-class функции, классы (с ES6).
- **Асинхронность**: Promises, async/await для обработки асинхронных операций (AJAX, таймеры).
- **Кросс-платформенность**: Работает в браузерах (Chrome, Firefox) и на серверах (Node.js).

## Где используется?
- **Фронтенд**: Интерактивность сайтов (React, Vue, Angular).

\`npm create vite@latest\`
- **Бэкенд**: Серверы (Node.js, Express).
- **Мобильные приложения**: React Native, Ionic.
- **Десктоп**: Electron (VS Code, Discord).
- **Игры**: Phaser, Three.js.

## Пример простого кода

\`\`\`javascript
// Функция для приветствия
function greet(name) {
  return \`Привет name!\`
  }

// Вызов
console.log(greet('Мир'));  // Привет, Мир!
\`\`\` 
---
\`\`\`
// Функция для приветствия
function greet(name) {
  return \`Привет name!\`
  }

// Вызов
console.log(greet('Мир'));  // Привет, Мир!
\`\`\` 

| Колонка 1 (левый) | Колонка 2 (центр) | Колонка 3 (правый) |
|-------------------|:----------------:|-------------------|
| Строка 1, ячейка 1 | http://localhost:3000/2 | Строка 1, ячейка 3 |
| Строка 2, ячейка 1 | Строка 2, ячейка 2 | Строка 2, ячейка 3 |
| Выравнивание: лево | :----: центр | ----: право |

`,
      },
    ],
  }

  return data
}
