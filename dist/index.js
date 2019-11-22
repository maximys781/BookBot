"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//console.log('Hello World');
const dotenv = require("dotenv");
const telegraf = require('telegraf');
dotenv.config({ path: `${__dirname}/../.env` });
const bot = new telegraf(process.env.TOKEN);
bot.on('text', (ctx) => {
    ctx.reply(ctx.message.text);
});
bot.startPolling();
// console.log(process.env.TOKEN);
//# sourceMappingURL=index.js.map