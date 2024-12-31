const TelegramBot = require('node-telegram-bot-api');
const token = '7871190937:AAHn_Ad8G6eKyVUCOwDNKGqFywnA6T88pIg';
const bot = new TelegramBot(token, { polling: true });

async function sendNotification(name, email, phone, courseName) {
    const chatId = '318068904';
    const message = `New application received:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCourse: ${courseName}`;
    await bot.sendMessage(chatId, message);
}

module.exports = { sendNotification };
