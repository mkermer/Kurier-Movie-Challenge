import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/app.actions";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { getApiPath } from "../Authentication/utils";

function Login() {
    const history = useHistory();
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(getApiPath("/login"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });
            const response = await res.json();

            if (response.success) {
                // TODO: store global user data on redux
                const queryString = window.location.search;
                const params = new URLSearchParams(queryString);
                history.push(params.get("redirect") || "/");
            } else {
                setError(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div style={{ width: "24rem" }}>
                <h1 className="logo">Login</h1>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            onChange={(ev) =>
                                setLoginData({
                                    ...loginData,
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
                                setLoginData({
                                    ...loginData,
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
                        Login
                    </Button>
                </Form>
                <div className="registerLink">
                    <p>
                        do not have an account yet?
                        <a href="/Registration"> Register</a>{" "}
                    </p>
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
