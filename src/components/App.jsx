import React from 'react';

import HomePage from './HomePage.jsx';
import EmployeePage from './EmployeePage.jsx';

import AppActions from '../actions/AppActions.jsx';
import AppStore from '../stores/AppStore.jsx';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchKey: '',
      employees: [],
      page: null
    };
  }

  searchHandler(searchKey) {
    AppActions.searchHandler(searchKey);
    var employees = AppStore.getAll();
    this.setState({
      searchKey: searchKey,
      employees: employees,
      page: <HomePage searchKey={searchKey} employees={employees} searchHandler={this.searchHandler.bind(this)} />
    });
  }

  componentDidMount() {
    router.addRoute('', () => {
      this.setState({
        page: <HomePage searchKey={this.state.searchKey} employees={this.state.employees} searchHandler={this.searchHandler.bind(this)} />
      });
    }.bind(this));

    router.addRoute('employees/:id', (id) => {
      this.setState({
        page: <EmployeePage employeeId={id} />
      });
    }.bind(this));

    router.start();
  }

  render() {
    return this.state.page;
  }
};