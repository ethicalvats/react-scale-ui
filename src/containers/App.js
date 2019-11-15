import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NotFoundPage from '../containers/NotFoundPage';
import SignUpPage from './SignUpPage';
import Sidebar from "../components/Sidebar";
import Header from '../components/Header';
import './App.css'
import UserListPage from './UserListPage';
import DashboardPage from './DashboardPage';

const AppWrapper = styled.div`
  margin: 0 auto 0 20%;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Scale Up"
        defaultTitle="Scale Up UI"
      >
        <meta name="description" content="Frontend Engineer, Technical Task" />
      </Helmet>
      <Router>
        <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/" render={()=>(
          <Redirect to="/signup" />
        )} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/users" component={UserListPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
