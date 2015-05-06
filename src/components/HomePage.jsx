import React from 'react';

import Header from './Header.jsx';
import SearchBar from './SearchBar.jsx';
import EmployeeList from './EmployeeList.jsx';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header text="Employee Directory" back="false"/>
        <SearchBar searchKey={this.props.searchKey} searchHandler={this.props.searchHandler} />
        <div className="content">
          <EmployeeList employees={this.props.employees} />
        </div>
      </div>
    );
  }
};