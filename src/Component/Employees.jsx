import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth/Authcontext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  background-image: linear-gradient(
    to right,
    rgb(242, 112, 156),
    rgb(255, 148, 114)
  );
  color: white;
  padding: 20px;
  height: 920px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  margin-left: 15px;
  margin-top: -1%;
  text-decoration: none;
  color: red;
  font-size: larger;
  font-weight: 600;
  float: right;
`;

const Logout = styled.button`
  border: none;
  background-color: transparent;
  font-size: larger;
  font-weight: 600;
`;
const StyleTable = styled.table`
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;

  th {
    border: 2px solid black;
    width: 20vw;
    color: black;
    font-weight: 1000;
  }
  td {
    border: 2px solid black;
    width: 20vw;
    color: black;
    font-weight: 600;
  }
`;

export const Employees = () => {
  const [data, setData] = useState([]);
  const {  logout } = useContext(AuthContext);
  const isauth = useSelector((state) => state.isauth);
  // const { logout } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:3001/employess")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  if (!isauth) {
    return <Navigate to="/login" />;
  }

  return (
    <Container>
      <h1>Product</h1>
      <Logout onClick={logout}>Logout</Logout>
      <StyleTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>More Details...</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.department}</td>
              <td>
                <StyledLink to={`/employees/${user.id}`}>
                  more details...
                </StyledLink>
              </td>
            </tr>
          ))}
        </tbody>
      </StyleTable>
    </Container>
  );
};
