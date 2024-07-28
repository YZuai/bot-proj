const { Client, Intents, MessageEmbed } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("登錄成功。");

  const activity = {
    name: "方糖",
    type: "PLAYING",
  };
  client.user.setPresence({
    status: "DND",
    activities: [activity],
  });
});

client.on("messageCreate", (message) => {
  const prefix = ")";

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(" ");

  // var server = message.guild.id;

  switch (args[0]) {
    case "cmd":
    case "help":
    case "?":
      const HelpEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`指令清單`)
        .setThumbnail(
          "https://yt3.googleusercontent.com/ytc/AMLnZu94-ySJed0xn3qFHvBOigTYtFitZBRvxxa31OPY=s176-c-k-c0x00ffffff-no-rj",
        )
        .setDescription(
          `方糖機器人使用\`)\`作指令前綴:

> \`burger\`  讚嘆漢堡 \`(TODO)\`
> \`cmd\` / \`help\` / \`?\` 指令清單 (即此清單)
> \`congrats\` / \`恭喜\`  恭喜！！
> \`dl\`  雨日
> \`dice\`  從 1 ~ 6 隨機抽出一個號碼
> \`dice10\`  從 1 ~ 10 隨機抽出一個號碼
> \`huh\`  <:wowwww:1008014576866033704>
> \`link\`  方糖的社群連結 (還有DC tag)
> \`ridicule\`  嘲諷
> \`rf\` 從⭕或❌挑選答案
> \`say\`  重複說話
> \`sb\`  回覆sb訊息
> \`secret\`  一個神祕的驚喜訊息
> \`sorry\`  對不起
> \`update\`  指令更新 \`(TODO)\`
> \`video_time\`  方糖最後發片的時間
> \`yr_gif\` 查看雨日還沒私訊Suisei動圖的時間

**更新** 去除了一些不好笑的指令，未來會去除更多。
`,
        )
        .setFooter({ text: "方糖機器人" });
      // > \`dary\` / \`howsun\`  sb
      // > \`sugar_cube\`  方糖是大佬
      // > \`you_are_dl\`  方糖會否認
      return message.reply({
        embeds: [HelpEmbed],
      });
    case "dice":
      var final = Math.floor(Math.random() * 6, 1);
      const diceEmbed = new MessageEmbed()
        .setTitle(`🎲 丟骰子 (6)`)
        .setColor("RANDOM")
        .setDescription(`> 你得到的數字是: **${final}** !`)
        .setFooter({ text: "方糖機器人" });
      return message.reply({
        embeds: [diceEmbed],
      });
    case "dice10":
      var final = Math.floor(Math.random() * 10, 1);
      const diceEmbed10 = new MessageEmbed()
        .setTitle(`🎲 丟骰子 (10)`)
        .setColor("RANDOM")
        .setDescription(`> 你得到的數字是: **${final}** !`)
        .setFooter({ text: "方糖機器人" });
      return message.reply({
        embeds: [diceEmbed10],
      });
    // case "sugar_cube":
    //     if (message.author.id == "845593970931138570") {
    //         message.reply("方糖甚麼垃圾")
    //     } else {
    //         message.reply("方糖是大佬! 🛐")
    //     }

    //     break;
    // case "you_are_dl":
    //     message.reply("??????我不是")

    //     break
    case "link":
      const LinkEmbed = new MessageEmbed()
        .setTitle(`歡迎訂閱！`)
        .setDescription("有待更新...\n")
        .setColor("RANDOM")
        .setThumbnail(
          "https://yt3.googleusercontent.com/ytc/AMLnZu94-ySJed0xn3qFHvBOigTYtFitZBRvxxa31OPY=s176-c-k-c0x00ffffff-no-rj",
        )
        .addFields(
          {
            name: "主頻道",
            value: "https://tinyurl.com/46au4puc",
            inline: true,
          },
          {
            name: "副頻道",
            value: "https://tinyurl.com/2uzy9bpe",
            inline: true,
          },
          { name: "?", value: "https://tinyurl.com/2cynyt6e", inline: true },
          {
            name: "AI證明",
            value: "https://tinyurl.com/yc65zaf8",
            inline: true,
          },
          {
            name: "krac bac reup",
            value: "https://tinyurl.com/4d2en243",
            inline: true,
          },
          {
            name: "原批跳舞",
            value: "https://tinyurl.com/2bhcyt6f",
            inline: true,
          },
          {
            name: "yes23",
            value: "https://tinyurl.com/4yyt7s9z",
            inline: true,
          },
          {
            name: "推特",
            value: "https://tinyurl.com/y9fhnucf",
            inline: true,
          },
          {
            name: "B站",
            value: "https://tinyurl.com/ysk6mnyp",
            inline: true,
          },
          {
            name: "DC",
            value: "`yee0931`",
            inline: true,
          },
        )
        .setFooter({ text: "方糖機器人" });
      return message.reply({
        embeds: [LinkEmbed],
      });
    case "dl":
      if (
        message.author.id == "972686722729123880" ||
        message.author.id == "910859579548635146"
      ) {
        message.reply(
          "天啊是雨日啊我好感動啊啊啊啊啊啊啊啊雨日是大佬!!!!🛐🛐🛐🛐",
        );
      } else {
        message.reply("雨日是大佬!🛐");
      }

      break;
    case "congrats":
    case "恭喜":
      message.channel.send("恭喜!!!");

      break;
    // case "dary":
    //     message.channel.send("dary sb");

    //     break;
    // case "howsun":
    //     message.channel.send("howsun sb");

    //     break;
    case "secret":
      message.reply(
        "https://tenor.com/view/rickroll-roll-rick-never-gonna-give-you-up-never-gonna-gif-22954713",
      );

      break;
    case "sb":
      message.channel.send("sb");

      break;
    case "ridicule":
      message.channel.send("<:ridicule:1057317379945803877>");

      break;
    case "video_time":
      const VideoTimeEmbed = new MessageEmbed()
        .setTitle(`方糖上次發片時間`)
        .setColor("RANDOM")
        .setThumbnail(
          "https://yt3.googleusercontent.com/ytc/AMLnZu94-ySJed0xn3qFHvBOigTYtFitZBRvxxa31OPY=s176-c-k-c0x00ffffff-no-rj",
        )
        .addFields(
          { name: "主頻道", value: "<t:1655049600:R>", inline: true },
          { name: "副頻道", value: "<t:1690968180:R>", inline: true },
          { name: "大尾立", value: "<t:1611676800:R>", inline: true },
        )
        .setFooter({ text: "方糖機器人" });
      return message.reply({
        embeds: [VideoTimeEmbed],
      });
    case "online":
      const sugarCubeOnlineEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .addFields(
          { name: "方糖最後上線日期", value: `\`2023/10/20\``, inline: false },
          { name: "訊息", value: "雨日是大佬!", inline: false },
          { name: "距離目前時間", value: `<t:1697793000:R>`, inline: false },
        )
        .setFooter({ text: "方糖機器人" });
      return message.reply({
        embeds: [sugarCubeOnlineEmbed],
      });
    case "sorry":
      message.channel.send(
        "對不起!! <:setfire_crying:1005497109434347611> <:setfire_crying:1005497109434347611>",
      );

      break;
    case "huh":
      message.channel.send("<:wowwww:1008014576866033704>");

      break;
    case "yn":
    case "rf":
      const rf = ["⭕", "❌"];

      const random = Math.floor(Math.random() * rf.length);
      var final = rf[random];
      const ranEmbed = new MessageEmbed()
        .setTitle(`🤔 提問`)
        .setColor("RANDOM")
        .setDescription(`> 你詢問的問題的結果: ${final}`)
        .setFooter({ text: "方糖機器人" });
      return message.reply({
        embeds: [ranEmbed],
      });

    case "yr_gif":
      const YuriGifEmbed = new MessageEmbed()
        .setTitle(`等待雨日私訊suisei動圖`)
        .setColor("RANDOM")
        .setThumbnail(
          "https://yt3.ggpht.com/pjJl6Yg2g3lgFH8VhGi-ORAroMQo78wemsFeNr591TgpjyTFKXRbGfZXyDoCjK8DmWuXGgT5=s176-c-k-c0x00ffffff-no-rj-mo",
        )
        .addFields({ name: "已經過:", value: "<t:1678364460:R>", inline: true })
        .setFooter({ text: "雨日機器人" });
      return message.reply({
        embeds: [YuriGifEmbed],
      });
    case "say":
      // if (server == "997765674145427527") {
      //     message.reply("打倒方糖政權！拒絕不公利的人人管！")
      // } else {
      let content = message.content.trim();
      let split = content.split(" ").slice(1).join(" ");

      if (message.author.bot == true) return;

      if (!split) {
        message.reply("我不知道你要說甚麼，反正雨日是大佬 :)");
      } else {
        message.delete();
        message.channel.send(`${split}\n\n> **${message.member.user.tag}**`);
      }

      break;

    // case "sayre":
    //     var split = message.content.split(" ").slice(1).join(" ")

    //     if (message.author.bot == true)
    //         return
    //     if (!split)
    //         message.reply("我不知道你要說甚麼，反正雨日是大佬 :)")
    //     else
    //         message.reply(split)

    //     break
    //
    // case "thanks":
    //     const ThanksEmbed = new MessageEmbed()
    //     .setColor("RANDOM")
    //     .setTitle(`感謝訊息`)
    //     .setDescription(`感謝雨日的超光速切割。`)
    //     .setFooter({ text: '方糖機器人' });
    //     return message.channel.send({
    //         embeds: [ThanksEmbed]
    //     })
  }
});

// config.json has been written into the .gitignore file.
client.login(token);
