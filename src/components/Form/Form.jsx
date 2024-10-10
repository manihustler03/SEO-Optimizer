import React, { useState, useRef, useEffect } from "react";
import "./Form.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Form = () => {
  const emailRef = useRef(null);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = () => {
    const value = emailRef.current.value;

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        if (value === "") {
          setError("");
          setIsVisible(false);
        } else if (emailRegex.test(value)) {
          setError("");
          setIsVisible(false);
        } else {
          setError("Invalid email address");
          setIsVisible(true);
        }
      }, 1000)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = emailRef.current.value;
    if (emailRegex.test(value)) {
      setPasswordBtn(true);
    } else {
      setError("Please enter a valid email address before submitting");
    }
  };

  useEffect(() => {
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  return (
    <>
      <div className="form-div">
        <div>
          <h3>Welcome to SEO Optimize!</h3>
          <h3>let's create an account </h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter your email</label>
            <div className="input-div">
              <MdOutlineArrowRightAlt color="red" size="25px" />
              <input
                type="text"
                id="email"
                ref={emailRef}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                autoComplete="off"
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <label htmlFor="">Enter your password</label>
              <div className="input-div">
                <MdOutlineArrowRightAlt color="red" size="25px" />
                <input placeholder="Enter your password" />
              </div>
            </div>
            <div className="submit-div">
              <MdOutlineArrowRightAlt color="red" size="25px" />
              <button className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
        <p className="error-msg">{error}</p>
      </div>
    </>
  );
};

export default Form;
