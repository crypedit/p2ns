import contract from "truffle-contract";
import P2NSJSON from "./build/contracts/P2NS.json";

class P2NS {
  constructor(web3) {
    this.web3 = web3
    this.contract = contract(P2NSJSON);
    this.contract.setProvider(web3.currentProvider);
  }

  async myAddress() {
    return (await this.web3.eth.getAccounts())[0]
  }

  putName = async (value) => {
    let currentNetwork = this.web3.currentProvider.publicConfigStore._state.networkVersion
    let exist
    if(currentNetwork === "1") { // mainnet
      exist = await this.contract.at('0x78ae0a977d3e57ce52423a1d18fc6a79774ef611')
    } else if (currentNetwork === "3") {  // ropsten
      exist = await this.contract.at('0x3720cbd9272473444b96787d686748792c6b9b88')
    } else if (currentNetwork === "4") { // rinkeby
      exist = await this.contract.at('0x60b0dff7e53165e9142872f5d631070517db9621')
    } else {
      exist = await this.contract.deployed()
    }
    let owner = await this.myAddress()
    return await exist.PutName('fan.torchz@gmail.com', {from: owner})
  }
}

export default P2NS
