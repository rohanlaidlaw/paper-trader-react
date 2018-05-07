import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';


class CardButton extends React.Component {
  static addCard() {
    return (
      <Card style={{
                float: 'left', padding: 8, margin: 16, width: 600,
            }}
      >
        <h2>Data</h2>
      </Card>);
  }

  constructor(props) {
    super(props);
    this.state = ({
      cardCount: 0,
    });

    this.addCard = this.addCard.bind(this);
    this.addMoreCards = this.addMoreCards.bind(this);
  }

  addMoreCards() {
    const { cardCount } = this.state;
    this.setState({ cardCount: cardCount + 1 });
  }


  cards() {
    const rows = [];
    const { cardCount } = this.state;
    for (let i = 0; i < cardCount; i += 1) {
      rows.push(this.addCard());
    }
    return rows;
  }

  render() {
    return (
      <div style={{ width: '50%' }}>
        <RaisedButton label="Track Stock" onClick={this.addMoreCards} />
        {this.cards()}
      </div>
    );
  }
}


export default CardButton;
