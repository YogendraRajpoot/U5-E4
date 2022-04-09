import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: orange;
`;
const Wrapper = styled.div`
  align-item: center;
  width: 40vh;
  box-shadow: -2px 10px 15px 5px #888888;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  // align-item: center;
  // width: 60%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
`;
const Card = styled.div`
  margin-left: auto;
  margin-right: auto;
  // border: 2px solid red;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledInput = styled.input`
  height: 8vh;
  width: 40ch;
`;
const StyledInput2 = styled.input`
  height: 5vh;
  width: 19vh;
`;

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobilenumber: "",
    aboutyou: "",
    username: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const { name, email, password, username, mobilenumber, aboutyou } = form;

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(form);

    fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
      method: "post",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    login();
  };
  const login = () => {
    navigate("/login");
  };

  return (
    <div>
      <Wrapper>
        <h3>Login</h3>
        or
        <StyledLink to="/login">Login To Your Account</StyledLink>
        <Card>
          <StyledForm onSubmit={handlesubmit}>
            <StyledInput
              name="username"
              type="text"
              placeholder="Enter Your UserName"
              onChange={handleChange}
              value={username}
              required
            />
            <br />
            <StyledInput
              name="name"
              type="text"
              placeholder="Enter Your Name"
              onChange={handleChange}
              value={name}
              required
            />
            <br />
            <StyledInput
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              value={email}
              required
            />
            <br />
            <StyledInput
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={password}
              required
            />
            <br />
            <StyledInput
              name="mobilenumber"
              type="number"
              placeholder="Enter Your Mobile Number"
              onChange={handleChange}
              value={mobilenumber}
              required
            />
            <StyledInput
              name="aboutyou"
              type="text"
              placeholder="Write Something About You"
              onChange={handleChange}
              value={aboutyou}
              required
            />
            <StyledInput2 type="submit" value="submit" />
            <br />
            <br />
          </StyledForm>
        </Card>
      </Wrapper>
    </div>
  );
};
