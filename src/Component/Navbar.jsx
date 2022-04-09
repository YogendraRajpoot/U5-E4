import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import "./image/logo.png"
// import { AuthContext } from "../AuthContext";
// import { useDispatch, useSelector } from "react-redux";
// import { reset } from "../../Redux/Action/action";

const Container = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
  border:12px solid black;
`;

const Wraper = styled.div`
  // border: 2px solid black;
  height: 100%;
  width: 140vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;

  .left-div {
    display: flex;
    flex-direction: row;
    // border: 2px solid black;
    width: 62vh;
    align-items: center;
    // font-size: small;
    color: black;
  }
  .right-div {
    // border: 2px solid black;
    width: 77vh;
    // background-color: bisque;
    padding: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
// const Image1 = styled.img`
//   //   stroke: currentColor;
//   fill: #fc8019;
//   height: 60px;
//   // width=500px;
//   stroke-width: 0;
//   &:hover {
//     transform: scale(1.15);
//     transition: 0.5s;
//   }
// `;
// const Box = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-left: 10%;
//   color: grey;
//   .Link1 {
//     font-weight: 1000;
//   }

//   .Link2 {
//     color: grey;
//     text-decoration: none;
//     // font-weight: 0;
//     width: 26vh;
//   }
//   &:hover .Link1,
//   &:hover {
//     color: orange;
//     cursor: pointer;
//   }
// `;
const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;

  flex-direction: row;
  margin-left: 10%;
  color: black;
  font-weight:600;
  &:hover {
    color: orange;
    cursor: pointer;
  }
  // .Link1 {
  // color: grey;
  //   font-weight: 1000;
  // }

  .Link2 {
    color: grey;
    text-decoration: none;
    font-weight: 0;
  }
  // &:hover .Link1,
  // &:hover {
  //   color: orange;
  //   cursor: pointer;
  // }
  .logout {
    cursor: pointer;
    border: none;
    background: transparent;
    font-size: medium;
    color: grey;
  }
  .logout:hover {
    color: orange;
  }
`;

// const SmallBox = styled.div`
//   border: 2px solid black;
//   width: 20px;
// `;
// const Image = styled.img`
//   height: 90%;
// `;

export const Navbar = () => {
  //   const dispatch = useDispatch();
  //   const count = useSelector((state) => state.count);
  //   const { isAuth } = useContext(AuthContext);

  //   const { logout } = useContext(AuthContext);

  return (
    <Container>
      <Wraper>
        <div className="left-div">
            <StyledLink to="/" type="button">
              Home
            </StyledLink>
        </div>
        <div className="right-div">
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/employees">Employees </StyledLink>
        </div>
      </Wraper>
    </Container>
  );
};
