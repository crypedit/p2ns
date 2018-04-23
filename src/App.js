import React, { Component } from 'react';
import Web3 from "web3";
import './App.css';
import P2B from './p2b'
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
    this.p2b = new P2B(web3);
  }

  render() {
    return (
      <div className="container">
        <Card className="App">
         <CardHeader title="P2B Transfer"/>
         <TextField className="input" placeholder="address" fullWidth onChange={e=>this.setState({address:e.target.value})}/>
          <TextField className="input" placeholder="value" fullWidth onChange={e => this.setState({value:e.target.value})}/>
          <Button onClick={async () => {
            try {
              let {address, value} = this.state
              await this.p2b.to(address, value)
              alert("You have successfully transfer " + value + " to " + address)
            } catch(err) {
              alert(err)
            }
          }}>CONFIRM</Button>
        </Card>
      </div>
    );
  }
}

export default App;
