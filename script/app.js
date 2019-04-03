const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://13.125.35.132:8547'));


(async function () {
  try {
    for (let i = 0; i<10; i++){
      let checkPoint = web3.eth.getBlock("latest").number;
      console.log(checkPoint);

      let duration = 5;
      const end = checkPoint - duration;

      await performanceCheck(checkPoint, duration, end);
    }

  }
  catch (e) {
    console.log(e);
  }
})();

async function performanceCheck(checkPoint, duration, end) {
  let block = await web3.eth.getBlock(checkPoint);
  let eblock = await web3.eth.getBlock(checkPoint-duration);

  let timestamp = block.timestamp -eblock.timestamp;
  let txCount = 0;
  let blockSize = 0;

  for (checkPoint; checkPoint > end; checkPoint--){
    let block_value = await web3.eth.getBlock(checkPoint);
    txCount = txCount + block_value.transactions.length;
    blockSize = blockSize + block_value.size;
  }
  let hashrate =block.totalDifficulty -eblock.totalDifficulty;

  let avgBlockTime = timestamp / duration;
  let avgHashrate = hashrate / timestamp;
  let tps = txCount/timestamp;
  let avgBlockSize = blockSize/duration;

  let performanceIndex = {
    avgBlockTime: avgBlockTime,
    avgHashrate: avgHashrate,
    tps: tps,
    avgBlockSize: avgBlockSize
  };
  console.log(performanceIndex);

  return performanceIndex;
}





