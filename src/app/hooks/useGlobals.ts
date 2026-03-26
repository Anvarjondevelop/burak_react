import { createContext, useContext } from "react";
import { Member } from "../../lib/types/member";

interface GlobalInterface {
  authMember: Member | null;
  setAuthMember: (member: Member | null) => void;
  orderBuilder: Date;
  setOrderBuilder: (input: Date) => void;
}
//bu hook orqali authmember hamda setAuthMemberni qabul qilib olamiz
export const GlobalContext = createContext<GlobalInterface | undefined>(
  undefined
);

export const UseGlobals = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) throw new Error("useGlobal withit Provider");
  return context;
};
