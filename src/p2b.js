import contract from "truffle-contract";
import P2BJSON from "./contracts/P2BToken.json";

class P2B {
  constructor(web3) {
    this.web3 = web3
    this.contract = contract(P2BJSON);
    this.contract.setProvider(web3.currentProvider);
  }

  async myAddress() {
    return (await this.web3.eth.getAccounts())[0]
  }

  to = async (address, value) => {
    let exist = await this.contract.deployed()
    let owner = await this.myAddress()
    return await exist.transfer(address, value * 100, {from: owner})
  }
}

export default P2B
