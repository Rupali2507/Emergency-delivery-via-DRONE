import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const ContextProvider = (props) => {
  const [showMenu, setShowMenu] = useState("");
  const navigate = useNavigate();

  const value = {
    showMenu,
    setShowMenu,
    navigate,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ContextProvider;
