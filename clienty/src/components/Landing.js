import React from "react";
// import { connect } from "react-redux";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Emaily!</h1>
      <h3>Date: </h3>
      Collect feedback forms from users!
    </div>
  );
};
//
// class Landing extends React.Component {
//   renderDate() {
//     return <li>{this.props.auth.headers.date}</li>;
//   }
//   render() {
//     console.log(this.props.auth.headers.date);
//     return (
//       <div>
//         console.log()
//         <h1>Emaily!</h1>
//         <h3>Date : {this.renderDate()}</h3>
//       </div>
//     );
//   }
// }
//
// function mapStateToProps({ auth }) {
//   return { auth };
// }
//
// export default connect(mapStateToProps)(Landing);

export default Landing;
