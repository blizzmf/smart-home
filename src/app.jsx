import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import HomePage from './components/home/home';
import Security from './components/security/security';
import Light from './components/light/light';
import Heating from './components/heating/heating';
import Navbar from './components/navbar/navbar';
import './App.css';

const App = () => (
  <Container fluid>
    <Row>
      <Col>
        <Navbar />
      </Col>
    </Row>
    <Row>
      <Col>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/security" render={() => <Security />} />
          <Route exact path="/light" render={() => <Light />} />
          <Route exact path="/heating" render={() => <Heating />} />
        </Switch>
      </Col>
    </Row>
  </Container>
)

export default App;