import React, { useState } from "react";
import logo from "../src/assets/amazon.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./dataBaseConfig";
import {getDatabase,ref,set} from "firebase/database"

const CreateAccount = () => {
  const db = getDatabase();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    mobile: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const c = /^[6-9]\d{9}$/;

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, mobile } = formdata;

    if (c.test(mobile)) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccess("Account created successfully!");
        set(ref(db, 'users/' + mobile), {
        mail:email,
        pass:password,
        mob:mobile
        });
        setError("");
      } catch (err) {
        setError(err.message);
        setSuccess("");
      }
    } else {
      alert(
        "Please enter a valid mobile number starting with 6-9 and 10 digits in length."
      );
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }} className="main">
      <div>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "120px",
            height: "90px",
            position: "relative",
            left: "100px",
          }}
        />
        <div
          style={{
            width: "280px",
            border: "1px solid gray",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          <h1 style={{ fontSize: "28px", fontFamily: " Arial, sans-serif" }}>
            Create Account
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" style={{ fontWeight: "550" }}>
                Email
              </label>
              <br />
              <input
                required
                type="email"
                id="email"
                placeholder="Enter email"
                onChange={handleChange}
                style={{
                  width: "95%",
                  marginLeft: "0.5%",
                  height: "20px",
                  marginTop: "5px",
                }}
              />
            </div>
            <div style={{ marginTop: "5px" }}>
              <label htmlFor="password" style={{ fontWeight: "550" }}>
                Password
              </label>
              <br />
              <input
                required
                type="password"
                id="password"
                placeholder="At least 6 characters"
                onChange={handleChange}
                style={{
                  width: "95%",
                  marginLeft: "0.5%",
                  height: "20px",
                  marginTop: "5px",
                }}
              />

              <input
                style={{
                  width: "95%",
                  marginLeft: "0.5%",
                  height: "20px",
                  marginTop: "5px",
                }}
                required
                type="text"
                id="mobile"
                placeholder="Enter mobile"
                onChange={handleChange}
              />
            </div>

            <div style={{ marginTop: "15px" }}>
              <span>
                To verify your email, we will send you a confirmation link.
              </span>
            </div>
            <div className="verify-btn">
              <center>
                <button
                  type="submit"
                  style={{
                    marginTop: "20px",
                    padding: "5px",
                    width: "290px",
                    backgroundColor: "gold",
                    border: "1px solid gray",
                    borderRadius: "10px",
                  }}
                >
                  Create Account
                </button>
              </center>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
          </form>

          <hr />

          <div>
            <Link to="/login">Login here</Link>
            <p style={{ fontSize: "13px" }}>
              By creating an account, you agree to Amazon’s{" "}
              <a href="">Conditions of Use</a> and <a href="">Privacy Policy</a>
              .
            </p>
          </div>
        </div>
      </div>

      <footer>
        <center>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              marginRight: "50px",
            }}
            className="ul"
          >
            <li>
              <a href="" style={{ textDecoration: "none" }}>
                Conditions of Use
              </a>
            </li>
            <li>
              <a href="" style={{ textDecoration: "none" }}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" style={{ textDecoration: "none" }}>
                Help
              </a>
            </li>
          </ul>
        </center>
        <center>
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </center>
      </footer>
    </div>
  );
};

export default CreateAccount;
