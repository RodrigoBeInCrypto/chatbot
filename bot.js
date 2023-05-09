const TelegramBot = require('node-telegram-bot-api');

// Replace YOUR_TOKEN_HERE with your Telegram Bot API token
const token = '6240472749:AAElEbja52YTSuZ3Lhum76o8N26A82U99hg';

// Create a new Telegram bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for messages from users
bot.on('message', (msg) => {
  // Check if this is the user's first message to the bot
  if (msg.text === '/start') {
    // Send a message with options for the user
    bot.sendMessage(msg.chat.id, 'Welcome to my bot! Please select an option:', {
      reply_markup: {
        keyboard: [
          ['Option 1', 'Option 2'],
          ['Option 3', 'Option 4'],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
});


