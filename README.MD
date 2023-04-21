# Universe List NPM Package
The offical NPM Package for interacting with [Universe List](https://universe-list.xyz)'s API.

UniverseList.js is a Node.js library for interacting with the Universe List API, designed to simplify the process of accessing and manipulating bot data on the Universe List website. It was originally created by Ishaantek#0001, and has since been rewritten by [Tejas Lamba#1924](https://github.com/TejasLamba2006).

# Table of Contents:
1. [Installation](Installation)
2. [Getting Started](#getting-started)
   - [Posting Bot's Stat](#posting-bots-stat)
   - [Get a bot's info](#get-a-bots-info)
   - [Get a server's info](#get-a-servers-info)
   - [Get a bot's vote](#get-a-bots-vote)
   - [Check Vote from user](#check-Vote-from-user)
3. [Contributing](contributing)


# Installation
To install the package, run:

```bash

npm i universe-list.js 
```
# Getting Started
To post your bot's stats to Universe List, you'll need to define a Discord client in your code. You can do this using the `discord.js` library and creating a new Client object. Additionally, you'll need to import the `universe-list.js` package.

```js
const { Client, Events, GatewayIntentBits } = require('discord.js');
const universeList = require('universe-list.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

```
By including `GatewayIntentBits.Guilds` in your client's intents, you're giving your Discord Bot permission to view your bot's server count.

Once you've defined your client, you can start using the `universeList` object to interact with the Universe List API.

### Posting Bot's Stat
First, define your Discord client, second provide your Universe List APIKey found in your bot's edit page.

```js
const Discord = require('discord.js');
const client = new Discord.Client();
const API_KEY = 'YOUR_API_KEY';

// log in with your bot token
client.login('BOT_TOKEN')
  // post stats
  client.on('ready', () => {
  postStats(client, API_KEY);
});

//Post stats 
 client.on('ready', () => {
setInterval(async () => {
  try {
    await postStats(client, API_KEY);
  } catch (error) {
    console.error(`Failed to post stats: ${error}`);
  }
}, 5 * 60 * 1000); // Five minutes in milliseconds
});

```

#### Parameters
- `client: Discord.Client`: The Discord client instance for the bot you want to post stats for.
- `apiKey: string`: The API key that is required by the API endpoint.
- `debug?: boolean`: Whether or not to log the response message to the console. Optional, defaults to false.
##### Return value
- `Promise<void>`: This function does not return anything, but will throw an error if an error occurs.
### Get a bot's info
Provide a Discord bot ID of a bot that is on [Universe List](https://universe-list.xyz)

```js
const botId = '123456789'; // Replace with the ID of the bot you want to retrieve information for.

universeList.fetchBot(botId)
  .then((botData) => {
    console.log(botData);
  })
  .catch((err) => {
    console.error(err);
  });
```
`fetchBot(botId: string): Promise<object>`
Sends a `GET` request to the Universe List API to retrieve information about the specified bot.

- `botId` - The ID of the bot to retrieve information for.
Returns a Promise that resolves to an object containing information about the specified bot. If the request fails, the Promise will be rejected with an error message.
- Output
   ```json
  {
  "id": "123456789",
  "username": "ExampleBot",
  "discriminator": "0001",
  "avatar": "https://example.com/avatar.png",
  "prefix": "!",
  "owner": "987654321",
  "ownerTag": "ExampleUser#0001",
  "tags": ["Fun", "Utility"],
  "views": 1000,
  "submittedOn": "2022-01-01T00:00:00.000Z",
  "approvedOn": "2022-01-01T00:00:00.000Z",
  "shortDescription": "A bot that does things!",
  "description": "This is a longer description of what the bot does.",
  "shards": "1",
  "servers": 100,
  "votes": 50,
  "invite": "https://example.com/invite",
  "website": "https://example.com/",
  "github": "https://github.com/example",
  "support": "https://example.com/support"
   }

   ```
### Get a server's info
Provide a Discord server ID of a server that is on [Universe List](https://universe-list.xyz/servers)

```js
const serverId = '123456789'; // Replace with the ID of the server you want to retrieve information for.

universeList.fetchServer(serverId)
  .then((serverData) => {
    console.log(serverData);
  })
  .catch((err) => {
    console.error(err);
  });

```
`fetchServer(serverId: string): Promise<object>`
Sends a GET request to the Universe List API to retrieve information about the specified server.
- `serverId` - The ID of the server to retrieve information for.
Returns a Promise that resolves to an object containing information about the specified server. If the request fails, the Promise will be rejected with an error message.
- Output
  ```json
  {
  "name": "My Awesome Server",
  "id": "123456789012345678",
  "members": 50,
  "icon": "https://example.com/my-awesome-server.png",
  "invite": "https://discord.gg/abcdefg",
  "submittedOn": "4/20/2023",
  "website": "https://example.com/my-awesome-server",
  "owner": "987654321098765432",
  "ownerTag": "JohnDoe#1234",
  "tags": [ "Gaming", "Community", "Chill" ],
  "bump": "2023-04-20T22:59:32.454Z",
  "bumps": 33,
  "views": 129,
  "votes": 8,
  "shortDesc": "Come hang out with us and play games!",
  "description": "Welcome to My Awesome Server, a place where gamers of all types can come together and have fun! We have channels for all kinds of games, from shooters to RPGs to puzzle games. We also have voice channels where you can chat with other members and make new friends. Our community is friendly and welcoming, and we're always looking for new members to join us. So why not come check us out and see what we're all about? We can't wait to see you there!",
  }


  ```
### Get a bot's vote
Provide a Discord bot ID of a bot that is on [Universe List](https://universe-list.xyz)

```js
const botId = '123456789'; // Replace with the ID of the bot you want to retrieve votes for.

universeList.fetchVotes(botId)
  .then((votes) => {
    console.log(votes);
  })
  .catch((err) => {
    console.error(err);
  });
```
`fetchVotes(botId: string): Promise<object[]>`
Sends a GET request to the Universe List API to retrieve all the votes for the specified bot.

- `botId` - A string representing the ID of the bot to retrieve the votes for.
#### Returns
A Promise that resolves to an array of objects containing information about each vote for the specified bot. If the request fails, the Promise will be rejected with an error message.

Each vote object contains the following fields:

- `user` - A string representing the ID of the user who voted for the bot.
- `current` - An integer representing the timestamp (in milliseconds since the Unix epoch) when the user last voted for the bot.
- `next` - An integer representing the time (in seconds) until the user can vote again.
- Output
  ```json
  {
  "votes": [
      {
        "user": "987654321",
        "current": 1645612345000,
        "next": 86400
      },
      {
        "user": "567890123",
        "current": 1645609876000,
        "next": 0
      },
      {
        "user": "345678901",
        "current": 1645567890000,
        "next": 3600
      }
    ]
  }

  ```
### Check Vote from user
Provide a Discord bot ID of a bot that is on [Universe List](https://universe-list.xyz) & a Discord id of a user.

```js
const botId = '123456789'; // Replace with the ID of the bot to check the vote on.
const userId = '987654321'; // Replace with the ID of the user to check.

universeList.checkVote(botId, userId)
  .then((voteData) => {
    console.log(voteData);
  })
  .catch((err) => {
    console.error(err);
  });

```
`checkVote(botId: string, userId: string): Promise<{ voted: boolean, current?: number, next?: number }>`
Sends a GET request to the Universe List API to check if a user has voted for the specified bot.

- `botId` - A string representing the ID of the bot to check the vote on.
- `userId` - A string representing the ID of the user to check.

Returns a Promise that resolves to an object containing the following properties:
- `voted` - A boolean indicating if the user has voted for the bot or not.
- `current` - An optional integer representing the date the user voted. This property will only be present if the user has voted for the bot.
- `next` - An optional integer representing the time until the user can vote again. This property will only be present if the user has voted for the bot and there is a cooldown period.
#### Response
If the user has voted, the response will be an object with the following properties:
```js
{
  voted: true,
  current: number, // the date the user voted in milliseconds since epoch
  next: number // the time until they can vote again in seconds
}

```
If the user has not voted, the response will be an object with the following property:
```js
{
  voted: false
}

```

# Contributing
If you find a bug or have a suggestion for a new feature, feel free to open an issue or submit a pull request on GitHub. All contributions are welcome!
