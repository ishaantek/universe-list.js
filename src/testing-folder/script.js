const { checkVote } = require("universe-list.js");

voteFunction()

async function voteFunction() {
  const vote = await checkVote("1018001748020961311", "998763334264442912");
  console.log(vote)
}