import React, { Component } from 'react';
import Web3 from "web3";
import './App.css';
import P2NS from './p2ns'
import Card, { CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const web3 = global.web3 && new Web3(global.web3.currentProvider);

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  async componentDidMount() {
    if (!web3) {
      return;
    }
    this.p2ns = new P2NS(web3);
  }

  render() {
    return (
      <div className="container">
        <div className="Row">
        <Card className="PutName">
         <CardHeader title="你的名字:"/>
            <TextField className="input" placeholder="value" fullWidth onChange={e => this.setState({value:e.target.value})}/>
            <Button onClick={async () => {
                try {
                    let {value} = this.state
                    await this.p2ns.putName(value)
                    alert("You have successfully register your name " + value)
                } catch(err) {
                    alert(err)
                }
            }}>注册</Button>
        </Card>
        </div>
        <div className="Row">
        <Card className="AddressOf">
         <CardHeader title="按名字 查询地址"/>
            <TextField className="input" placeholder="value" fullWidth onChange={e => this.setState({value:e.target.value})}/>
            <Button onClick={async () => {
                try {
                    let {value} = this.state
                    let addr = await this.p2ns.addressOf(value)
                    alert("Address of " + value + " is " + addr)
                } catch(err) {
                    alert(err)
                }
            }}>查询</Button>
        </Card>
        </div>
        <div className="Row">
        <Card className="NameOf">
         <CardHeader title="按地址 查询名字"/>
            <TextField className="input" placeholder="value" fullWidth onChange={e => this.setState({value:e.target.value})}/>
            <Button onClick={async () => {
                try {
                    let {value} = this.state
                    let name = await this.p2ns.nameOf(value)
                    alert("Name of " + value + " is " + name)
                } catch(err) {
                    alert(err)
                }
            }}>查询</Button>
        </Card>
        </div>
      </div>
    );
  }
}

export default App;
