//console.log('Hello World');
import * as dotenv from 'dotenv'
import { Telegraf, ContextMessageUpdate } from 'telegraf'
const telegraf = require('telegraf')
dotenv.config({ path: `${__dirname}/../.env` })
const bot: Telegraf<ContextMessageUpdate> = new telegraf(process.env.TOKEN)
bot.on('text',
    (ctx) => {
        ctx.reply(ctx.message.text)
    })
bot.startPolling()
   // console.log(process.env.TOKEN);