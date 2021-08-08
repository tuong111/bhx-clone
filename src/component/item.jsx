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
  render() {
    const { name, price, url , id, isSelected} = this.props;
    return (
        <div className="item">
            <img src={url} alt="" />
          <div className="product-detail">
            <p className="produc-name">{name}</p>
            <p>{price}</p>
            <button className={!isSelected ? 'btnBuy' : 'btnBuy-active'} 
            onClick = {()=> this.getProductID(id)}>Buy</button> <br/>
          </div>
        </div>
    );
  }
}
export default Item;
