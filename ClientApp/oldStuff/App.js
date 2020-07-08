import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../oldStuff/Layout';
import { Home } from '../oldStuff/Home';
import { FetchData } from '../oldStuff/FetchData';
import { Counter } from '../oldStuff/Counter';
import { Hello } from '../oldStuff/teste';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={Hello} />
      </Layout>
    );
  }
}
