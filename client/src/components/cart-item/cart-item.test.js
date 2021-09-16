import React from "react";
import { shallow } from "enzyme";

import CartItem from "./cart-item.component";

it("hould render CartItem component", () => {
  const mockItem = {
    imageUrl: "www.testlink.com",
    price: 10,
    name: "jackets",
    quantity: 3,
  };

  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
