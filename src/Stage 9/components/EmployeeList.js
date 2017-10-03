import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          {this.props.employees.map(cur => (
            <li
              key={cur.id}
              className="listText"
              onClick={() => this.props.selectEmployee(cur)}
            >
              {cur.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeList;
