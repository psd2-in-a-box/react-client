import React from 'react';
import vis from 'vis';

export default class Transactions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: new vis.DataSet(),
            timeline: undefined
        }
    }

    componentDidUpdate() {
        this.props.transactions.map(transaction => {
            this.state.items.add({
                id: transaction.id,
                content: '<span class="title is-4">' + transaction.amount + '</span>',
                start: Date.parse(transaction.transactionDate)
            });
        });
        this.state.timeline.fit();
    }

    componentDidMount() {
        let container = document.getElementById('timeline');
        this.state.timeline = new vis.Timeline(container, this.state.items, {
            width: '100%',
            height: '300px',
            maxHeight: '400px'
        });
    }

    render() {
        return (
            <div id="timeline"></div>
        );
    }

}