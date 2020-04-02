//console.log('Hello World');
import * as dotenv from 'dotenv'
import {Telegraf, ContextMessageUpdate} from 'telegraf';
const telegraf=require('telegraf');
const express=require('express');
const expressApp=express();

dotenv.config({path: `${__dirname}/../.env`});

const bot: Telegraf<ContextMessageUpdate> = new telegraf(process.env.TOKEN);
expressApp.use(bot.webhookCallback('/secret-path'))
bot.telegram.setWebhook('https://api.telegram.org/bot'+process.env.TOKEN+'/setWebhook?url=http://gutov.website/telegram-bot')
bot.on('text',
    (ctx)=>{ctx.reply(ctx.message.text)
});
bot.startPolling();
   // console.log(process.env.TOKEN);