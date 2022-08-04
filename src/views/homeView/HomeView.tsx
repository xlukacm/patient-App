import React, { FC} from "react";
import EnhancedTable from "../../components/EnhancedTable";
import useLocalStorage from "../../hooks/useLocalStorage";
import {useNavigate} from "react-router-dom";
import Layout from "../../components/Layout"

const HomeView: FC = () => {
  const [loginName,] = useLocalStorage("account", "");
  const navigate = useNavigate()
  if(loginName == ""){
    navigate("/login")
  }
  return (
      <>
        <Layout/>
        <EnhancedTable />
      </>
  );
};
export default HomeView;
