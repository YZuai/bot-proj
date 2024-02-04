import token
import discord

intents = discord.Intents.default
intents.message_content = True

client = discord.Client(intents = intents) # type: ignore

async def ready():
    print("登入成功。")

async def message(message):
    if message.author == client.user:
        return
    
    prefix = ")"

    if not message.content.startswith(prefix):
        return
    
    args = message.content.slide


    match message:
        case 



client.run("MTAyMDY1ODU1ODYxMTc2MzI3MA.GTfzGu.HjvAcw8o5mu1FHBo_MxTvkQS5TLoJABVIsD1T0")

