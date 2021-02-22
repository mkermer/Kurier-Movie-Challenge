import React from "react";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../actions/app.action';
import { Form, Button} from 'react-bootstrap';


function Login() {
  return (
    <div className="container">
      <div className="left">
        <div className="inner">
          <h1 className="logo">Login</h1>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
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

          <div className="registerLink">
                <a href="/Registration">do not have an account yet? Register</a>
            </div>

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
// export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login
