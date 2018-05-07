import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';


class CardButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = ( {
            min: 0,
            max: 10,
            cardCount:0
        })

        this.addCard = this.addCard.bind(this);
        this.addMoreCards = this.addMoreCards.bind(this);
    }

    addMoreCards(){
        var cardCount = this.state.cardCount;
        this.setState({cardCount: cardCount + 1})
    }

    addCard() {
        return(
            <Card style={{float: 'left', padding: 8, margin: 16, width: 600}}>
                <h2>Data</h2>
            </Card>)
    }

    cards() {
        var rows = [];
        var cardCount = this.state.cardCount;
        for (var i=0; i < cardCount; i++) {
            rows.push(this.addCard())
        }
        return rows
    }

    render() {
        return (
            <div style={{width: '50%'}}>
                <RaisedButton label="Track Stock" onClick={this.addMoreCards}/>
                {this.cards()}
            </div>
        );
    }
}


export default CardButton;