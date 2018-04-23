const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 5712388,
    },
    rinkeby: {
      network_id: 0,
      provider: new HDWalletProvider(
        process.env.METAMASK_MNEMONIC,
        "https://rinkeby.infura.io/LtCp6vYseQHwZxs0i94S"
      )
    }
  }
};