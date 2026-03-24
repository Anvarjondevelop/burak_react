import { createContext, useContext } from "react";
import { Member } from "../../lib/types/member";

interface GlobalInterface {
  authMember: Member | null;
  setAuthMember: (member: Member | null) => void;
}
//bu hook orqali authmember hamda setAuthMemberni qabul qilib olamiz
export const GLobalContext = createContext<GlobalInterface | undefined>(
  undefined
);

export const UseGlobals = () => {
  const context = useContext(GLobalContext);
  if (context === undefined) throw new Error("useGlobal withit Provider");
  return context;
};
