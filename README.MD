# Universe List NPM Package
The offical Node SDK to interact with [Universe List](https://universe-list.xyz)'s API.

```js
npm i universe-list.js
```

# Getting Started
To post your bot's stats to Universe List, you will need a Discord client and the `universe-list.js` package defined.

```js
const { Client, Events, GatewayIntentBits } = require('discord.js');
const universeList = require('universe-list.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

```


## POSTing bot's stats
First, define your Discord client, and then provide your Universe List API Key found in your bot's edit page.


```js
const Discord = require('discord.js');
const client = new Discord.Client();
const API_KEY = 'YOUR_API_KEY';

// Login to your bot
client.login('BOT_TOKEN')

// Post stats 
 client.on('ready', () => {
setInterval(async () => {
  try {
    await postStats(client, API_KEY);
  } catch (error) {
    console.error(`Failed to post stats: ${error}`);
  }
}, 5 * 60 * 1000); // Posts every 5 minutes
});

```

#### Debug Mode
If you want to log the response message to the console, add `true` as parameter. <br>
*await postStats(client, API_KEY, true);*

## GETing bot's info
Provide a Discord bot ID of a bot that is on [Universe List](https://universe-list.xyz).

```js
const botId = '123456789'; // Replace this with the ID of the bot.

universeList.fetchBot(botId)
  .then((botData) => {
    console.log(botData);
  })
  .catch((err) => {
    console.error(err);
  });
```

## GETing server's info
Provide a Discord server ID of a server that is on [Universe List](https://universe-list.xyz/servers).

```js
const serverId = '123456789'; // Replace this with the ID of the server.

universeList.fetchServer(serverId)
  .then((serverData) => {
    console.log(serverData);
  })
  .catch((err) => {
    console.error(err);
  });
```


## GETing bots's votes
Provide a Discord bot ID of a bot that is on [Universe List](https://universe-list.xyz).

```js
const botId = '123456789'; // Replace this with the ID of the bot.

universeList.fetchVotes(botId)
  .then((votes) => {
    console.log(votes);
  })
  .catch((err) => {
    console.error(err);
  });
```

## Check Vote from user
Provide a Discord bot ID of a bot that is on [Universe List](https://universe-list.xyz) and a Discord user ID.

```js
const botId = '123456789'; // Replace this with the ID of the bot.
const userId = '987654321'; // Replace this with the ID of the user.

universeList.checkVote(botId, userId)
  .then((voteData) => {
    console.log(voteData);
  })
  .catch((err) => {
    console.error(err);
  });

```

# Credits
This API was originally created by [Ishaan Garg](https://ishaantek.com) and was later modified by [Tejas Lamba](https://github.com/TejasLamba2006).