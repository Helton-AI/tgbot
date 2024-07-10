const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/hi/, function onLoveText(msg) {
    bot.sendMessage(msg.chat.id, "hi!");
});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatId, resp);
});

bot.onText(/^\/start$/, function (msg) {
  const opts = {
      // reply_to_message_id: msg.message_id,
      reply_markup: {
          resize_keyboard: true,
          one_time_keyboard: true,
          inline_keyboard: [[{ text: 'Open Mini App', callback_data: '1', url:'https://t.me/teqwewqeetriasdass_bot/demo' }]]
      }
  };

  bot.sendMessage(msg.chat.id, "I'm a test robot, click the button to visit official website", opts);
});

// bot.on('callback_query', function onCallbackQuery(callbackQuery) {
//   const action = callbackQuery.data;
//   const msg = callbackQuery.message;
//   const opts = {
//     chat_id: msg.chat.id,
//     message_id: msg.message_id,
//   };

//   let text;
//   if (action === '1') {
//     text = 'Opening tg mini app...';
//   }

//   bot.editMessageText(text, opts);
// });