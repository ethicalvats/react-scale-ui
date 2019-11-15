import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

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
  let location = useLocation()
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Scale Up"
        defaultTitle="Scale Up UI"
      >
        <meta name="description" content="Frontend Engineer, Technical Task" />
      </Helmet>
        <Header />
      <Sidebar />
      <TransitionGroup>
        <CSSTransition 
          key={location.key}
          timeout={300}
          classNames="item"
        >
        <Switch location={location}>
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/users" component={UserListPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
        </CSSTransition>
      </TransitionGroup>
    </AppWrapper>
  );
}

export default function() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signup" />
        </Route>
        <Route path="*">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
