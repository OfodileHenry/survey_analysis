import React from "react";

import StripeCheckout from "react-stripe-checkout";

import { connect } from "react-redux";

import * as actions from "../actions";

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
          // image="../../public/pexels-pixabay-259200.jpg"
          name="Emaily App"
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          token={(token) => this.props.handleToken(token)}
        >
          <button className="btn btn-default btn-primary">Make Payments</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, actions)(Payments);
