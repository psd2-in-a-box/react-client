import React from 'react';

export default class Transaction extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="media">
                <div className="media-left">
                    <p className="title is-3">{'' + this.props.transaction.amount}</p>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p className="heading is-4">{'' + this.props.transaction.text}</p>
                    </div>
                </div>
            </article>
        );
    }

}