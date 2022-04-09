import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "styled-components";

const Wrapper = style.div`
height:500px;
width:800px;
border:2px solid black;
border-radius:2%;
margin-left: auto;
margin-right: auto;
color:black;
`;

export const SingleProductPage = () => {
  const [user, setUser] = useState([]);
  const { userid } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/employess/${userid}`)
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <h1>Name:- {user.name}</h1>
      <br />
      <h2>Gender:- {user.gender}</h2>
      <br />
      <h2>Department:- {user.department}</h2>
      <br />
      <h2>Salary :-{user.salary}</h2>
      <br />
      <h2>Age:- {user.age}</h2>
    </Wrapper>
  );
};
