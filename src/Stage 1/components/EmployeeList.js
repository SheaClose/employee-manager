import React from 'react';

function EmployeeList(props) {
  return (
    <div>
      <ul className="listContainer">
        {props.employees.map(employee => {
          return (
            <li
              className="listText"
              key={employee.id}
              onClick={() => {
                props.selectEmployee(employee);
              }}
            >
              {' '}
              {employee.name}{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EmployeeList;
