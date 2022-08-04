import React, { createContext, FC, useState } from "react";
import IUserData from "../models/IUserData";

type SetValue = (value: any) => void;
export type userData = {
  valueLogin: string;
  setValueLogin: SetValue;
};

export type Login = {
  login: string;
  setLogin: (login: string) => void;
};

export const userDefault: Login = {
  login: "",
  setLogin: () => null,
};
// export const UserContexts = createContext<any>({});
export const UserContexts = createContext<Login>(userDefault);
export const UserContext = createContext<userData | null>(null);

//TU sa mi to nepodarilo zvladnut s kontextom, musim si to este dostudovat

// const UserProvider: FC<user> = (props) => {
//   const [valueLogin, setValueLogin] = React.useState(props);
//   return <UserContexts.Provider value={props.login} />;
// };
// export default UserProvider;

