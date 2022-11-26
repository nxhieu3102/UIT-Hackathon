import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Main";
import Dashboard from "./components/Layout/Dashboard";
import Home from "./pages/Home";
import { LoginProvide } from "./provider/LoginProvider";
import DashboardPage from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {
          <Fragment>
            <Route path="/" element={
              <LoginProvide>
                <Layout>
                  <Home />
                </Layout>
              </LoginProvide>
            } />

            <Route path="/dashboard" element={
              <LoginProvide>
                <Dashboard>
                  <DashboardPage/>
                </Dashboard>
              </LoginProvide>
            } />
          </Fragment>
        }
      </Routes>
    </Router>
  )
}

export default App;
