const { Telegraf } = require("telegraf");

// توکن از env
const bot = new Telegraf("7923525398:AAFb1X1vA1sguiasz-D4TCHZoSTs7XyA1CU");

bot.on("text", (ctx) => {
  ctx.reply("سلام خوبی عشقم ");
});

// ورودی Vercel
module.exports = async (req, res) => {
  if (req.method === "POST") {
    await bot.handleUpdate(req.body, res);
  } else {
    res.status(200).send("Bot is running!");
  }
};
