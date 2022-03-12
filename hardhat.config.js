const { defaultAccounts } = require('ethereum-waffle');

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/fEoAIku2M2w9J9li6_-Wc198a36S-tuX',
      accounts: ['379de39ea4b77e48922f6012330a1737a9ae07c814b5cee4a5f4b19887027ba8']
    }
  }
}