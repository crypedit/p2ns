const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 5712388,
    },
    ropsten: {
      network_id: 3,
      gas: 4600000,
      provider: new HDWalletProvider(
        process.env.METAMASK_MNEMONIC,
        "https://ropsten.infura.io/LtCp6vYseQHwZxs0i94S"
      )
    },
    rinkeby: {
      network_id: 4,
      provider: new HDWalletProvider(
        process.env.METAMASK_MNEMONIC,
        "https://rinkeby.infura.io/LtCp6vYseQHwZxs0i94S"
      )
    }

  }
};