require('dotenv').config()

const { checkVote } = require("../index");
const config = require('./config')
const { Client, GatewayIntentBits } = require('discord.js');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });
//client.login(config.token)

test1("833923181684719666", "502406420453654529")

async function test1(id, id1) {
  const check = await checkVote(id, id1);
  console.log(check)
  
}