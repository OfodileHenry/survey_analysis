import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return (
    <div>
      <h5>Please confirm your entries!</h5>
      <div>
        <label>Survey Title</label>
        <div>{formValues.title}</div>
      </div>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, location, navigate, params)}
        className="green btn-flat right white-text"
      >
        Send Survey<i className="material-icons right">email</i>
      </button>
    </div>
  );
};
function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
