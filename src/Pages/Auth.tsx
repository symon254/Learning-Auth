import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import { useLoginUserMutation } from "../service/authApi";
import { toast } from "react-toastify";

const initialState = {
    phone: "",
    pin: "",
};

const Auth = () => {
    const [formValue, setFormValue] = useState(initialState);

    const navigate = useNavigate();

    const [
        loginUser,
        {
            data: loginData,
            isSuccess: isLoginSuccess,
            isError: isLoginError,
            error: loginError,
        },
    ] = useLoginUserMutation();

    const { pin, phone } = formValue;
    const handleChange = (e: any) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };
    const handleLogin = async () => {
        if (pin && phone) {
            await loginUser({ pin, phone });
        } else {
            toast.error("please fill in all the fields");
        }
    };

    useEffect(() => {
        if (isLoginSuccess) {
            toast.success("user logged in successfully");
            navigate("/dashboard");
        }
    }, [isLoginSuccess]);

    return (
        <section className="vh-100">
            <div
                style={{
                    marginTop: "100px",
                    width: "50%",
                    marginLeft: "250px",
                }}
            >
                <div className="form-outline form-black mb-4 mt-6">
                    <MDBInput
                        type="number"
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                        label="Phone"
                        className="form-control form-control-lg"
                    />
                </div>
                <div className="form-outline form-black mb-4 mt-6">
                    <MDBInput
                        type="password"
                        name="pin"
                        value={pin}
                        onChange={handleChange}
                        label="Pin"
                        className="form-control form-control-lg w-50%"
                    />
                </div>
                <button
                    className="btn btn-outline-dark btn-lg px-5"
                    type="button"
                    onClick={() => handleLogin()}
                >
                    Login
                </button>
            </div>
        </section>
    );
};

export default Auth;
