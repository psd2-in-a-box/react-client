import React from 'react';
import Transaction from './Transaction';
import FlipMove from 'react-flip-move';

export default class Transactions extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
        <FlipMove easing="cubic-bezier(0, 0.7, 0.8, 0.1)">
        {
          this.props.transactions.map(transaction => 
                  <Transaction transaction={transaction} />          
        )}
        </FlipMove>
        </div>
        );
    }

}