import React from 'react';

import EmployeeListItem from './EmployeeListItem.jsx';

export default class EmployeeList extends React.Component {
  render() {
    var items = this.props.employees.map((employee) => {
      return (
        <EmployeeListItem key={employee.id} employee={employee} />
      );
    });
    return (
      <ul className="table-view">
        {items}
      </ul>
    );
  }
};