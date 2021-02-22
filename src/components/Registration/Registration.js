import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getApiPath } from "../Authentication/utils";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.actions';
import { Form, Button } from "react-bootstrap";

export default function Registration() {
    const [error, setError] = useState("");
    const history = useHistory();
    const [registerData, setRegisterData] = useState({
        email: "",
        username: "",
        password: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        const { email, username, password } = registerData;

        try {
            const res = await fetch(getApiPath("/user/add"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registerData),
            });
            const response = await res.json();

            if (response.success) {
                // TODO: store global user data on redux
                history.push("/");
            } else {
                //TODO: show ui errors
            }
        } catch (error) {
            console.log(error);
            // TODO: handle auth error
        }
    };

    return (
        <div className="container">
            <div style={{ width: "24rem" }}>
                <h1 className="logo">Register</h1>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            onChange={(ev) =>
                                setRegisterData({
                                    ...registerData,
                                    email: ev.target.value,
                                })
                            }
                            type="email"
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            onChange={(ev) =>
                                setRegisterData({
                                    ...registerData,
                                    username: ev.target.value,
                                })
                            }
                            type="text"
                            placeholder="Enter username"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                            onChange={(ev) =>
                                setRegisterData({
                                    ...registerData,
                                    password: ev.target.value,
                                })
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="save password" />
                    </Form.Group>
                    <Button
                        variant=""
                        className="registrationButton"
                        type="submit"
                    >
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Registration);