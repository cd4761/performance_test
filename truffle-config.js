require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: '13.125.35.132',
      port: 8547,
      network_id: '*', // eslint-disable-line camelcase
    },
    // plasma: {
    //   host: 'localhost',
    //   port: 8547,
    //   network_id: '*', // eslint-disable-line camelcase
    // },
    infura: {
      host: 'https://mainnet.infura.io/v3/34448178b25e4fbda6d80f4da62afba2',
      network_id: 1
    }
  }
};
