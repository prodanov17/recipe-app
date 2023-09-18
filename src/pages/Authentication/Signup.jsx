import React from "react";
import { EmailIcon } from "../../assets/icons";
import BasicInput from "../../UI/BasicInput";

const Signup = () => {
  return (
    <div>
      <h1>Welcome, please sign up!</h1>
      <div>
        <BasicInput type="text" id="email" placeholder="Email">
          <EmailIcon />
        </BasicInput>
      </div>
    </div>
  );
};

export default Signup;
