import React from 'react';
import TransactionsTimeline from './TransactionsTimeline';
import Transactions from './Transactions';
import Transaction from './Transaction';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.reorder = this.reorder.bind(this);
  }

  componentDidMount() {
    fetch('http://api.futurefinance.io/api/accounts/4574000000/transactions', {
      method: 'GET',
      headers: new Headers({ 'Authorization': 'Basic dXNlcjEwMTpUNGhxV1lMazNXR0Y=' })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      // console.log('Size: ' + data._embedded.transactions.length);
      this.setState({data: data._embedded.transactions});
    }.bind(this)).catch(function (error) {
      alert(error);
    });
  }

  reorder(idx) {
    let tmp = this.props.data[0];
    this.props.data[0] = this.props.data[idx];
    this.props.data[idx] = tmp;
    console.log('reorder');
  }

  render() {
    return (
      <div id="content">
        
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">
                My Account
              </h1>
              <h2 className="subtitle">
                transactions overview
              </h2>
            </div>
          </div>
        </section>

        <TransactionsTimeline transactions={this.state.data} reorder={this.reorder}/>
        <Transactions transactions={this.state.data} />        

      </div>
    );
  }
}
