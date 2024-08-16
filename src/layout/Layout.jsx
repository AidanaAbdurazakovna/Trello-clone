import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";


export const Layout=()=> {
  return (
    <div>
      <Header />
      <Main/>
    </div>
  );
}

export default Layout;