# 🛍 Shops Backend

Бекенд для магазину, розгорнутий на Render і підключений до MongoDB Atlas.

---

## 🚀 Деплой

- Репозиторій: [https://github.com/YanaShumylo/shops_backend]
- Робочий сервер: [https://shops-backend-d421.onrender.com]

---

## ⚙️ Структура

src/
├─ db/ # Підключення до MongoDB, моделі
├─ routers/ # Маршрути API
├─ middlewares/ # Обробка помилок, notFoundHandler
├─ services/ # Логіка для роботи з моделями
├─ utils/ # Допоміжні функції
├─ validation/ # Joi-схеми для валідації
├─ server.js # Налаштування Express
└─ index.js # Точка входу

---

## 📦 Встановлення локально

```bash
git clone https://github.com/YanaShumylo/shops_backend.git
cd shops_backend
npm install
cp .env.example .env
# заповнити .env змінними для MongoDB
npm run dev
🔑 Environment Variables (приклад)
PORT=3000
MONGODB_USER=your_user
MONGODB_PASSWORD=your_password
MONGODB_URL=cluster0.abcd.mongodb.net
MONGODB_DB=mydb

На Render ці змінні додаються через Environment → Add Environment Variable.