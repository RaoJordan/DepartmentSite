import React, { useState, useRef, useEffect } from "react";
import "./login.css";
import LoadingIndicator from "../common/LoadingIndicator";
const Signup = () => {
  const currentUser = {
    user_id: 1,
    name: "Yash",
    mobile: 8889990001,
    email: "yash@gmail.com",
  };
  // const { currentUser } = useAuth();
  const [document, setDocument] = useState();
  const [formData, setFormData] = useState({});
  const [formLoading, setFormLoading] = useState(false);

  const sigPadRef = useRef();
  const formRef = useRef();

  const handleInputChange = async (e) => {
    return;
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
      <div className="card-title title-al">Professor Sign Up</div>
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
                      <legend htmlFor="form_name" style={{ fontSize: "18px" }}>
                        Name
                      </legend>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="form_name"
                        onChange={(e) => {
                          handleInputChange(e);
                        }}
                        placeholder="Name"
                      />
                    </div>
                  </div>
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
                        onChange={(e) => {
                          handleInputChange(e);
                        }}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row-al">
                  <div className="col-al">
                      <legend htmlFor="form_phone" style={{ fontSize: "18px" }}>
                        Phone Number
                      </legend>
                      <input
                        required
                        type="tel"
                        className="form-control"
                        id="form_phone"
                        onChange={(e) => {
                          handleInputChange(e);
                        }}
                        placeholder="Phone Number"
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
                        onChange={(e) => {
                          handleInputChange(e);
                        }}
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="row-al">
                  <div className="col-al">
                      <legend htmlFor="form_confirm_password" style={{ fontSize: "18px" }}>
                        Confirm Password
                      </legend>
                      <input
                        required
                        type="password"
                        className="form-control"
                        id="form_confirm_password"
                        onChange={(e) => {
                          handleInputChange(e);
                        }}
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>


                  <div className="row-al" >
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block" 
                      >
                        {formLoading ? (
                          <LoadingIndicator color={"white"}></LoadingIndicator>
                        ) : (
                          "Sign Up"
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

export default Signup;
