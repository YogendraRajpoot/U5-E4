import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthAccount } from "../Redux/Action/action";
import { useDispatch } from "react-redux";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch ();
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const login = (token) => {
    if (token !== undefined) {
      console.log("token", token);
      dispatch(isAuthAccount(true));
      setToken(token);
      navigate(`/`);
    }
  };

  const logout = () => {
    dispatch(isAuthAccount(false));
    // localStorage.clear();
    // localStorage.removeItem("Token");
  };

  return (
    <AuthContext.Provider value={{ login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

// const { login } = useContext(AuthContext);
