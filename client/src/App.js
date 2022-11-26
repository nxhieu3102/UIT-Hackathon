import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { LoginProvide } from "./provider/LoginProvider";

const App = () => {
  return (
    <Router>
      <Routes>
        {
          <Route path="/" element={
            <LoginProvide>
              <Layout>
                <Home />
              </Layout>
            </LoginProvide>
          } />
        }
      </Routes>
    </Router>
  )
}

export default App;
