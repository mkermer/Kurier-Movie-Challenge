import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.actions';
import { Form, Button } from "react-bootstrap";

function Login() {
  return (
    <div className="container">
      <div style={{ width: "24rem" }}>
        <h1 className="logo">Login</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="save password" />
          </Form.Group>
          <Button variant="" className="registrationButton" type="submit">
            Login
          </Button>
        </Form>
        <div className="registerLink">
        <p>
        do not have an account yet?<a href="/Registration"> Register</a> </p>
      </div>

      </div>

    </div>
  );
}

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);


