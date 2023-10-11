import React, { useState, useRef, useEffect } from "react";
import "./login.css";
import LoadingIndicator from "../common/LoadingIndicator";

const Login = () => {

  const [formData, setFormData] = useState({});
  const [formLoading, setFormLoading] = useState(false);

  const formRef = useRef();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let form_data = {};
      formRef.current.querySelectorAll("input").forEach((input) => {
        if (input.type == "file") {
          return;
        }
        form_data[input.id] = input.value == "" ? null : input.value;
      });
      formRef.current.querySelectorAll("select").forEach((input) => {
        form_data[input.id] = input.value == "" ? null : input.value;
      });
      formRef.current.querySelectorAll("textarea").forEach((input) => {
        form_data[input.id] = input.value == "" ? null : input.value;
      });

      // return;
      setFormLoading(true);

      // return;
      console.log(form_data, document);
      // return;
      const form = new FormData();
      form.append("data", JSON.stringify(form_data));
      setFormLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="card-title title-al">Professor Login</div>
      <div className="container-box">
        <form
          ref={formRef}
          onSubmit={async (e) => {
            await handleSubmit(e);
          }}
        >
          <div className="container content-al">
            <div className="user-details-al">
              <div className="input-box-al">
                <div className="details-al">
                  <div className="row-al">
                    <div className="col-al">
                      <legend htmlFor="form_email" style={{ fontSize: "18px" }}>
                        Email
                      </legend>
                      <input
                        required
                        type="email"
                        className="form-control"
                        id="form_email"
                        onChange={handleInputChange}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row-al">
                    <div className="col-al">
                      <legend htmlFor="form_password" style={{ fontSize: "18px" }}>
                        Password
                      </legend>
                      <input
                        required
                        type="password"
                        className="form-control"
                        id="form_password"
                        onChange={handleInputChange}
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="row-al">
                    <div>
                      <button type="submit" className="btn btn-primary btn-block">
                        {formLoading ? (
                          <LoadingIndicator color={"white"}></LoadingIndicator>
                        ) : (
                          "Login"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login;
