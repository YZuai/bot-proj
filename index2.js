const { Client, Intents, MessageEmbed, SlashCommandBuilder, data } = require("discord.js")
 
const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ]
})
 
client.on("ready", () => {
    console.log("機器人已經成功上線且載入成功! 好玩!")
})
 
client.on("messageCreate", (message) => {
    const prefix = ")"
    if (!message.content.startsWith(prefix))
        return
    
    const args = message.content.slice(prefix.length).split(" ")
    
    switch (args[0]) {
    
    }
})

client.on("messageCreate", (message) => {
    const prefix = ")"
    if (!message.content.startsWith(prefix))
        return
    
    const args = message.content.slice(prefix.length).split(" ")
    switch (args[0]) {
        
    }
})

client.on("messageCreate", (message) => {
    const prefix = ")"
    if (!message.content.startsWith(prefix))
        return
    
    const args = message.content.slice(prefix.length).split(" ")
    
    switch (args[0]) {
    
    }
})

client.on("messageCreate", (message) => {
    const prefix = ")"
    if (!message.content.startsWith(prefix))
        return
    
    const args = message.content.slice(prefix.length).split(" ")
    
    switch (args[0]) {
    
    }
})

client.on("messageCreate", (message) => {
    const prefix = ")"
    if (!message.content.startsWith(prefix))
        return
    
    const args = message.content.slice(prefix.length).split(" ")
    switch (args[0]) {
        
    }
})

client.on("messageCreate", (message) => {
    const prefix = ")"
    if (!message.content.startsWith(prefix))
        return
    
    const args = message.content.slice(prefix.length).split(" ")
    
    switch (args[0]) {
    case "huh":
        message.channel.send("<:wowwww:1008014576866033704>")
    }
})

client.on("messageCreate", (message) => {
    const prefix = ")"
    if (!message.content.startsWith(prefix))
        return

    const args = message.content.slice(prefix.length).split(" ")
    switch (args[0]) {
        case "rf":
            const rf = [
                "⭕",
                "❌"
            ]
            const random = Math.floor(Math.random() * rf.length)
            const final = rf[random]
            const diceEmbed = new MessageEmbed()
                .setTitle(`🤔 提問`)
                .setColor("RANDOM")
                .setDescription(`> 你詢問的問題的結果: ${final}`)
                .setFooter({ text: '方糖機器人' });
            return message.reply({
                embeds: [diceEmbed]
            })
    }
})

client.on("messageCreate", (message) => {
    const prefix = ")"
    if (!message.content.startsWith(prefix))
        return
    
    const args = message.content.slice(prefix.length).split(" ")
    switch (args[0]) {
        case "yr_gif":
            const YuriGifEmbed = new MessageEmbed()
                .setTitle(`等待雨日私訊suisei動圖`)
                .setColor("RANDOM")
                .setThumbnail("https://yt3.ggpht.com/pjJl6Yg2g3lgFH8VhGi-ORAroMQo78wemsFeNr591TgpjyTFKXRbGfZXyDoCjK8DmWuXGgT5=s176-c-k-c0x00ffffff-no-rj-mo")
                .addFields(
                    { name: '已經過:', value: '<t:1678364460:R>', inline: true },
                )
                .setFooter({ text: '雨日機器人' });
            return message.reply({
                embeds: [YuriGifEmbed]
            })
    }
})

/*
client.on("messageCreate", (message) => {
    const prefix = "";
    const args = message.content.slice(prefix.length).split(" ");
    const keywords = ["方糖好吃", "每天吃", "身體健康"];
    const containsKeyword = keywords.some((keyword) => message.content.includes(keyword));
    if (containsKeyword) {
        message.channel.send("這我名");
    }
});
*/

client.login("MTAyMDY1ODU1ODYxMTc2MzI3MA.GTfzGu.HjvAcw8o5mu1FHBo_MxTvkQS5TLoJABVIsD1T0")