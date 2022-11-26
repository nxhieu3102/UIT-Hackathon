import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import {LoginProvide} from "./provider/LoginProvider";

const App = () => {


  const [isLogin, setLogin] = useState(false);
  const [isClickFormLogin, setIsClickFormLogin] = useState(false)

  const HandleLogin = (ev) => {
    setLogin(ev)
  }

  const HandleClickFormLogin = (ev) => {
    setIsClickFormLogin(ev)
  }

  return (
    <Router>
      <Routes>
        {
          <Route path="/" element={
            <LoginProvide>
              <Layout isLogin={isLogin} HandleLogin={HandleLogin} HandleClickFormLogin={HandleClickFormLogin} isClickFormLogin={isClickFormLogin}>
                <Home isLogin={isLogin} isClickFormLogin={isClickFormLogin} />
              </Layout>
            </LoginProvide>
          } />
        }
      </Routes>
    </Router>
  )
}

export default App;
