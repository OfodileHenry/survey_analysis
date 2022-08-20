import React from "react";

import StripeCheckout from "react-stripe-checkout";

class Payments extends React.Component {
  render() {
    return (
      <div>
        <StripeCheckout
          allowRememberMe={true}
          amount={500}
          bitcoin={true}
          alipay={true}
          description="survey_project_campaign"
          email="ofodilechukwuka@gmail.com"
          image="https://www.pexels.com/photo/bank-blur-business-buy-259200/"
          name="Emaily App"
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          token={(token) => console.log(token)}
        >
          <button className="btn btn-default btn-primary">Make Payments</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default Payments;
