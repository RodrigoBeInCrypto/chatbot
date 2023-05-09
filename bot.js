const TelegramBot = require('node-telegram-bot-api');

// Replace YOUR_TOKEN_HERE with your Telegram Bot API token
const token = '6240472749:AAElEbja52YTSuZ3Lhum76o8N26A82U99hg';

// Create a new Telegram bot
const bot = new TelegramBot(token, { polling: true });

// Define your options and responses
const options = {
  greeting: 'Hello! How can I assist you today?',
  help: 'Here are some things I can help you with:\n\n' +
        '/option1 - Description of option 1\n' +
        '/option2 - Description of option 2\n' +
        '/option3 - Description of option 3',
  option1: 'You chose option 1',
  option2: 'You chose option 2',
  option3: 'You chose option 3',
};

// Handle incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text.toLowerCase();

  // Check if the message matches one of the options
  if (message === '/start') {
    bot.sendMessage(chatId, options.greeting);
  } else if (message === '/help') {
    bot.sendMessage(chatId, options.help);
  } else if (message === '/option1') {
    bot.sendMessage(chatId, options.option1);
  } else if (message === '/option2') {
    bot.sendMessage(chatId, options.option2);
  } else if (message === '/option3') {
    bot.sendMessage(chatId, options.option3);
  } else {
    bot.sendMessage(chatId, 'Sorry, I didn\'t understand that.');
  }
});
