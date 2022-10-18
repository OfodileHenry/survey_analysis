//surveyNew shows or showing surveyForm and SurveyForm Review
import React from "react";
import { Form } from "react-final-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends React.Component {
  state = { showFormReview: false };
  renderContent() {
    if (this.state.showFormReview) {
      <SurveyFormReview
        onCancel={() => this.setState({ showFormReview: false })}
      />;
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Form({
  form: "surveyForm",
})(SurveyNew);
