import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51ILYzcEyob1DLJV5gXfjhVKclfxtLxzE9vb684amYigqfIHIA2N8S8xLVj56EGTA1WiNFA8fmpgxdVAFjFVg63N600duzzQswS";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfule");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name=" CRWN Cloting Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={() => onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
