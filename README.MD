# Universe List NPM Package
The offical NPM Package for interacting with [Universe List](https://universe-list.xyz)'s API.

`
npm i universe-list.js
`

### Getting setup
To post your bot's stats to Universe List, you will need a Discord client defined.

```js
const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const universeList = require('universe-list.js')
```

### POSTing bot's stats
First, define your Discord client, second provide your Universe List APIKey found in your bot's edit page.

```js
universeList.postStats(client, "APIKey")
```
### GETing bot's info
Provide a Discord bot ID of a bot that is on [Universe List](https://universe-list.xyz)

```js
universeList.fetchBot("botid")
```

### GETing server's info
Provide a Discord server ID of a server that is on [Universe List](https://universe-list.xyz/servers)

```js
universeList.fetchServer("serverid")
```

### GETing bots's votes
Provide a Discord bot ID of a bot that is on [Universe List](https://universe-list.xyz)

```js
universeList.fetchVotes("botid")
```

### Check Vote from user
Provide a Discord bot ID of a bot that is on [Universe List](https://universe-list.xyz) & a Discord id of a user.

```js
universeList.checkVote("botid", "userid")
```
