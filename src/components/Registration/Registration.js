import React from "react";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../actions/app.action';
import { Form, Button } from "react-bootstrap";


function Registration() {
  return (
    <div className="container">
      <div className="left">
        <div className="inner">
          <h1 className="logo">Register</h1>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="save password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>

      {/* <div className="right">
        <img src={imge} className="imge" alt="" />
      </div> */}
    </div>
  );
}

// const mapStateToProps = (state) => ({ applicationState: state });
// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(actions, dispatch),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Registration);

export default Registration;
