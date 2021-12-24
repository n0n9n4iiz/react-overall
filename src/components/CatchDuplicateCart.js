import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import Product from "../data/Product";
export default function CatchDuplicateCart() {
  const [cart, setCart] = useState([]);
  var toCart = (product) => {
    const exist = cart.find((x) => x.product.name === product.name);
    if (exist) {
      console.log("exist");
      setCart(
        cart.map((x) =>
          x.product.name === product.name ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      console.log("not exist");
      setCart([...cart, { product, qty: 1 }]);
    }
  };
  var onRemove = (product) => {
    console.log(product);
    const exist = cart.find((x) => x.product.name === product.name);
    if(exist.qty === 1){
      console.log("1");
      setCart(cart.filter(x => x.product.name !== product.name))
    }else{
      console.log("1+");
      setCart(
        cart.map((x) =>
          x.product.name === product.name ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }
  var getResult = () => {
    const TAX = 0.07;
    var getTotalPrice = cart.reduce((x,y) => x + (y.product.price * y.qty) , 0 )
    var getTaxPrice = getTotalPrice * TAX;
    var getShipping = getTotalPrice > 2000 ? 0 : getTotalPrice > 1000 ? 50 : getTotalPrice > 0 ? 100 : 0 ;
    var getNetPrice = getTotalPrice + getTaxPrice + getShipping
    return (
      <div>
      <h3>Total Price : {getTotalPrice}</h3>
      <h3>Tax : {getTaxPrice.toFixed(2)}</h3>
      <h3>Shipping : {getShipping}</h3>
      <h1>Net : {getNetPrice}</h1>
      </div>
    )
  }
  
  var getProduct = Product.map((product, index) => (
    <Col key={index} className="m-3">
      <div
        className="box shadow p-2"
        style={{ width: "150px", height: "150px" }}
      >
        <div>{product.name}</div>
        <div>{product.price}</div>
        <Button
          onClick={() => {
            toCart(product);
          }}
        >
          Take to cart
        </Button>
      </div>
    </Col>
  ));
  var getCart = cart.map((carts, index) => {
    return (
      <Row key={index}>
        <Col
          lg={12}
          md={12}
          className="box shadow p-3 m-3 c"
        >
          <Row className="d-flex align-items-center">
            <Col>
            {carts.product.name}
            </Col>
            <Col>
                <img
                  className="ml-3"
                  src="logo192.png"
                  style={{ width: "75px", height: "75px" }}
                  alt=""
                ></img>
            </Col>
            <Col sm={3}>
                <InputGroup>
                  <Button onClick={()=>{onRemove(carts.product)}}>-</Button>
                  <FormControl
                  readOnly={true}
                    type="number"
                    value={carts.qty}
                    className="no-spinner text-center"
                  ></FormControl>
                  <Button onClick={()=>{toCart(carts.product)}}>+</Button>
                </InputGroup>
            </Col>
            <Col className="text-center">
             x
            </Col>
            <Col>
             {carts.product.price}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  });
  return (
    <div>
      <Container>
        <h1>CatchDuplicateCart</h1>
        <hr></hr>
        <Row>
          <Col lg={6} md={6}>
            <h2>Product</h2>
            <br></br>
            <Row>{getProduct}</Row>
          </Col>
          <Col lg={6} md={6}>
            <h2>Cart</h2>
            <br></br>
            {getCart.length > 0 ? getCart : "There's not item in cart"}
            <br></br>
             {getResult()} 
          </Col>
        </Row>
      </Container>
    </div>
  );
}
