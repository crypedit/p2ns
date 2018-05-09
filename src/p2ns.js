import contract from "truffle-contract";
import P2NSJSON from "./contracts/P2NS.json";

class P2NS {
  constructor(web3) {
    this.web3 = web3
    this.contract = contract(P2NSJSON);
    this.contract.setProvider(web3.currentProvider);
  }

  async myAddress() {
    return (await this.web3.eth.getAccounts())[0]
  }

  async p2nsContract() {
    let exist
    try {
      let currentNetwork = this.web3.currentProvider.publicConfigStore._state.networkVersion
      if(currentNetwork === "1") { // mainnet
        exist = await this.contract.at('0x0')
      } else if (currentNetwork === "3") {  // ropsten
        exist = await this.contract.at('0x809b72f93776771128723ba54914920ba1341506')
      } else if (currentNetwork === "4") { // rinkeby
        exist = await this.contract.at('0xe9880eedd4d44ec0b25f3a362af5b8dfd2754c62')
      } else {
        exist = await this.contract.deployed()
      }
    } catch(e) { // ropsten by default
        exist = await this.contract.at('0x809b72f93776771128723ba54914920ba1341506')
    }
    return exist
  }

  putName = async (value) => {
    let exist = await this.p2nsContract()
    let owner = await this.myAddress()

    return await exist.PutName(value, {from: owner})
  }

  addressOf = async (value) => {
    let exist = await this.p2nsContract()
    let owner = await this.myAddress()
    return await exist.AddressOf(value, {from: owner})
  }

  nameOf = async (value) => {
    let exist = await this.p2nsContract()
    let owner = await this.myAddress()
    return await exist.NameOf(value, {from: owner})
  }
}

export default P2NS
