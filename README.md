# AiGenda

**AiGenda** — это современное веб-приложение, разработанное с использованием Next.js и TypeScript, специально созданное для удобного и адаптивного управления задачами и встречами. Приложение предлагает гибкую, отзывчивую верстку и стильный интерфейс, разработанный на основе макета в Figma. 

## Ключевые особенности

- **Next.js**: Приложение построено на [Next.js](https://nextjs.org/), что обеспечивает мощный серверный рендеринг и отличную производительность для пользователей.
- **TypeScript**: Код проекта полностью написан на TypeScript, что помогает уменьшить ошибки и делает проект более поддерживаемым.
- **styled-components** и **БЭМ**: Для стилизации используется библиотека styled-components, что позволяет применять стили непосредственно к компонентам. Код организован по методологии БЭМ, что добавляет структурированность и понятность.
- **Адаптивный дизайн**: AiGenda адаптируется к различным устройствам — будь то смартфоны, планшеты или компьютеры, интерфейс выглядит одинаково хорошо и удобно.
- **Макет Figma**: Весь интерфейс разработан по готовому [макету](https://www.figma.com/design/N7LeucxhUrNU6a3qPOA7VS/Untitled?node-id=1-9170&node-type=frame&t=AwvfnKKPKoowvH9R-0) в figma, чтобы обеспечить согласованный, элегантный внешний вид.

## Структура проекта

- **app**: Главная папка с компонентами и страницами приложения.
  - **components**: Здесь хранятся все повторно используемые компоненты, такие как `Button`, `Footer`, `Header`, и адаптивные элементы `TableAdaptive` и `TableDesktop`, которые обеспечивают удобное отображение данных на экранах разного размера.
  - **pages**: В этой папке находятся страницы приложения, включая `_document.js`, настроенный для рендеринга `styled-components` на сервере.
  - **public**: Папка для статических ресурсов (шрифты, изображения), которые используются на всех страницах приложения.

## Начало работы

1. Сначала клонируйте репозиторий:
   ```bash
   git clone https://github.com/Vlasdislav/ai-genda.git
   cd ai-genda
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите сервер разработки:
   ```bash
   npm run dev
   ```

4. Перейдите в браузере на [http://localhost:3000](http://localhost:3000), чтобы увидеть приложение в действии!

## Тонкости конфигурации

- **Babel и styled-components**: В `babel.config.js` настроены параметры для работы со styled-components, позволяя Next.js корректно обрабатывать стили на сервере.
- **Tailwind CSS**: AiGenda также использует Tailwind CSS для дополнительной стилизации, который настроен в `tailwind.config.js`.
- **Настройки TypeScript**: Конфигурация TypeScript в `tsconfig.json` адаптирована для нужд проекта и включает опцию `strictNullChecks`, которая помогает избежать ошибок, связанных с `null` значениями.

<!-- ---

Наслаждайтесь использованием AiGenda! Этот проект — отличное сочетание современных технологий и продуманного дизайна, который будет удобен для всех, от новичков до опытных пользователей. -->
