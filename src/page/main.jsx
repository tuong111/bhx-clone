import React from "react";
import Card from "../component/card";
import Item from "../component/item";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 0,
          name: "Thùng 30 gói mì gấu đỏ tôm gà 63g",
          price: 80000,
          imgURL:
            "https://cdn.tgdd.vn/Products/Images/2565/86998/bhx/thung-30-goi-mi-gau-do-tom-va-ga-63g-202103031737067806_300x300.jpg",
          isSelected: false,
        },
        {
          id: 1,
          name: "Ba rọi heo rút sườn khay 500g",
          price: 123000,
          imgURL:
            "https://cdn.tgdd.vn/Products/Images/8781/241252/bhx/ba-roi-heo-rut-suon-cp-khay-500g-202106210901554178_300x300.jpeg",
          isSelected: false,
        },
        {
          id: 2,
          name: "Bàn chải cho bé siêu mềm",
          price: 25000,
          imgURL:
            "https://cdn.tgdd.vn/Products/Images/3027/214622/bhx/ban-chai-cho-be-formula-junior-walrus-long-sieu-mem-giao-mau-ngau-nhien-202103022255335035_300x300.jpg",
          isSelected: false,
        },
      ],
    };
  }
  getIsSelected = (id) => {
    let vitri = this.state.products.findIndex((value) => value.id === id);
    let currentProduct = this.state.products[vitri];
    currentProduct.isSelected === true ? currentProduct.isSelected = false : currentProduct.isSelected = true
    this.setState({
        isSelected : currentProduct.isSelected
    })
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Card />
        <div className="item-container">
          {products.map((item) => {
            return (
              <Item
                name={item.name}
                price={item.price}
                url={item.imgURL}
                id={item.id}
                idCancel={item.id}
                sendIDtoMain={(value) => this.getIsSelected(value)}
                isSelected={item.isSelected}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Main;
