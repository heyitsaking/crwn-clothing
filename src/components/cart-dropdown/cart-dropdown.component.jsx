import React from "react";

import CustonButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustonButton>GO TO CHECKOUT</CustonButton>
  </div>
);

export default CartDropdown;
