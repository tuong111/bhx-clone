import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  getProductID = (id) => {
    this.props.sendIDtoMain(id)
  }
  getCancelProductID = (idCancel) => {
    this.props.sendIDCancelToMain(idCancel)
  }
  render() {
    const { name, price, url , id, isSelected, idCancel} = this.props;
    return (
        <div className="item">
            <img src={url} alt="" />
          <div className="product-detail">
            <p className="produc-name">{name}</p>
            <p>{price}</p>
            <button className={!isSelected ? 'btnBuy' : 'btnBuy-active'} onClick = {()=> this.getProductID(id)}>Buy</button> <br/>
            <button onClick = {()=> this.getCancelProductID(idCancel)}>Cancel Buy</button>
          </div>
        </div>
    );
  }
}
export default Item;
