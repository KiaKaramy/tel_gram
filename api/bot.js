const { Telegraf } = require("telegraf");

// توکن از env
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on("text", (ctx) => {
  ctx.reply("سلام");
});

// ورودی Vercel
module.exports = async (req, res) => {
  if (req.method === "POST") {
    await bot.handleUpdate(req.body, res);
  } else {
    res.status(200).send("Bot is running!");
  }
};
