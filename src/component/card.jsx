import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="card">
          <p>Card</p>
          <p>Total : Cost : </p>
        </div>
      </div>
    );
  }
}
export default Card;
