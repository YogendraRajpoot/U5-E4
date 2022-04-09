import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const login = (token) => {
    if (token !== undefined) {
      console.log("token", token);
      setIsAuth(true);
      setToken(token);
      navigate(`/`);
    }
  };

  const logout = () => {
    setIsAuth(false);
    // localStorage.clear();
    // localStorage.removeItem("Token");
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuth, token }}>
      {children}
    </AuthContext.Provider>
  );
};

// const { login } = useContext(AuthContext);
