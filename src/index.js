const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const baseURL = `https://universe-list.xyz/api`

module.exports = {
    postStats: async (client, apikey) => {
    const response = await fetch(`${baseURL}/bots/${client.user.id}`, {
        method: 'POST',
        headers: {
            'authorization': apikey,
            'server_count': client.guilds.cache.size.toString(),
            'shard_count': "1",
          'Content-Type': 'application/json'
        },
      })
      const data = await response.json();
      console.log(`[Universe List API]: ${data.message}`);
    return;
  },
  fetchBot: async (botid) => {
    let res = await fetch(`${baseURL}/bots/${botid}`)
    return await res.json()
  },
  fetchServer: async (serverid) => {
    let res = await fetch(`${baseURL}/servers/${serverid}`)
    return await res.json()
  },
  fetchVotes: async (botid) => {
    let res = await fetch(`${baseURL}/bots/${botid}/votes`)
    return await res.json()
  },
  checkVote: async (botid, userid) => {
    let res = await fetch(`${baseURL}/bots/${botid}/voted/?user=${userid}`)
    return await res.json()
  },

}