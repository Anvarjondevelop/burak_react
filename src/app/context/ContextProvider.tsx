import React, { ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { Member } from "../../lib/types/member";
import { GLobalContext } from "../hooks/useGlobals";

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cookies = new Cookies();
  if (!cookies.get("accessToken")) localStorage.removeItem("memberData"); // Cookiening vaqti tugan o'chib ketgandan keyin localStoragedagi member datani ham o'chirib tashlash uchun
  // aks holda localStorage doim saqlanadi

  const [authMember, setAuthMember] = useState<Member | null>(
    localStorage.getItem("memberData")
      ? JSON.parse(localStorage.getItem("memberData") as string)
      : null
  );
  console.log("====Verify====");

  return (
    <GLobalContext.Provider value={{ authMember, setAuthMember }}>
      {children}
    </GLobalContext.Provider>
  );
};

export default ContextProvider;
