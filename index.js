const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const baseURL = `https://universe-list.com/api`

module.exports = {
   postStats: async (client, apiKey, debug) => {
  try {
    const serverCount = client.guilds.cache.size;

    const response = await fetch(`${baseURL}/bots/${client.user.id}`, {
      method: 'POST',
      headers: {
        'Authorization': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        server_count: serverCount,
        shard_count: 1
      })
    });

    if (response.status === 401) {
  throw new Error('Please provide an API Key.');
}

if (response.status === 404) {
  const data = await response.json();
  throw new Error(`This bot is not on our list, or you entered an invalid API Key. `);
}

if (response.status === 400) {
  const data = await response.json();
  throw new Error(`Please provide a server/shard count.`);
}

if(debug) {
    const data = await response.json();
    console.log(`[Universe List API]: ${data.message}`);
}
  } catch (error) {
    console.error(`Failed to post stats: ${error}`);
    throw error;
  }
}

,
  fetchBot: async (botId) => { // Define a function that takes a bot ID as input.
    try {
        const res = await fetch(`${baseURL}/bots/${botId}`); // Send a GET request to the API endpoint for the specified bot.
        if (!res.ok) { // Check if the response status is not ok
            throw new Error('Failed to fetch bot'); // Throw an error if response status is not ok
        }
        const data = await res.json(); // Extract the JSON data from the response.
        return data; // Return the data.
    } catch (error) { // Catch any errors that occur
        console.error(error); // Log the error to the console
        throw error; // Rethrow the error to the calling function
    }
},

  fetchServer: async (serverid) => {
     try {
        const res = await fetch(`${baseURL}/servers/${serverid}`); // Send a GET request to the API endpoint for the specified server.
        if (!res.ok) { // Check if the response status is not ok
            throw new Error('Failed to fetch server'); // Throw an error if response status is not ok
        }
        const data = await res.json(); // Extract the JSON data from the response.
        return data; // Return the data.
    } catch (error) { // Catch any errors that occur
        console.error(error); // Log the error to the console
        throw error; // Rethrow the error to the calling function
    }
  },
  fetchVotes: async (botid) => {
    try {
        const res = await fetch(`${baseURL}/bots/${botid}/votes`);
        if (!res.ok) {
            throw new Error('Failed to fetch votes');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
},
  checkVote: async (botid, userid) => {
    try {
    const res = await fetch(`${baseURL}/bots/${botid}/voted/?user=${userid}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`Error checking vote for bot ID ${botid} and user ID ${userid}:`, err);
    throw new Error('Unable to check vote. Please try again later.');
  }
  },

}