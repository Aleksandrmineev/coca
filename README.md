🚀 Web Boilerplate Template

Готовый стартовый шаблон для фронтенд-проектов на HTML/CSS/JS с поддержкой ESLint, Prettier, Stylelint и Vite.

📦 Состав шаблона

✅ Vite для сборки

🎨 Prettier с автоформатированием

🧼 Stylelint (с поддержкой SCSS)

📏 ESLint для JavaScript

⚙️ Автофиксы при сохранении в VS Code

🧩 Конфиги в отдельных файлах

⚙️ Установка

npx degit ваш-логин/web-boilerplate my-new-project
cd my-new-project
npm install
npm run dev

💡 Или нажмите Use this template на GitHub для создания нового репозитория.

🧰 Скрипты

npm run dev # запуск dev-сервера (Vite)
npm run build # финальная сборка
npx stylelint "\*_/_.css" --fix # автофиксы стилей
npx prettier --write . # автоформатирование кода

📁 Структура проекта

├── src/
│ ├── index.html
│ ├── main.js
│ └── css/
│ └── main.css
├── .eslintrc.cjs
├── .stylelintrc.json
├── .prettierrc
├── .vscode/
│ └── settings.json
├── package.json
└── README.md

💡 Рекомендации

Используйте VS Code и включите форматирование на сохранение (Ctrl+S) для Prettier/Stylelint.

Конфиги можно адаптировать под SCSS или TypeScript при необходимости.

Удобно развивать как личный шаблон: просто коммитьте новые улучшения и используйте degit в новых проектах.
