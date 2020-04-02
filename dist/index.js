"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//console.log('Hello World');
const dotenv = require("dotenv");
const telegraf = require('telegraf');
const express = require('express');
const expressApp = express();
dotenv.config({ path: `${__dirname}/../.env` });
const bot = new telegraf(process.env.TOKEN);
expressApp.use(bot.webhookCallback('/secret-path'));
bot.telegram.setWebhook('https://api.telegram.org/bot' + process.env.TOKEN + '/setWebhook?url=http://gutov.website/telegram-bot');
bot.on('text', (ctx) => {
    ctx.reply(ctx.message.text);
});
bot.startPolling();
// console.log(process.env.TOKEN);
//# sourceMappingURL=index.js.map