import React, { Component } from 'react';

class EmployeeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: null,
      originalEmployee: null,
      notModified: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      employee: Object.assign({}, props.selectedEmployee),
      originalEmployee: props.selectedEmployee,
      notModified: true
    });
  }

  handleChange(prop, val) {
    if (this.state.notModified) {
      this.setState({ notModified: false });
    }
    const employeeCopy = Object.assign({}, this.state.employee, {
      [prop]: val
    });
    this.setState({ employee: employeeCopy });
  }

  save() {
    const {
      name,
      phone,
      title,
      updateName,
      updatePhone,
      updateTitle
    } = this.state.employee;
    updateName(name);
    updatePhone(phone);
    updateTitle(title);
    this.props.refreshList();
  }

  cancel() {
    this.setState({ employee: this.state.originalEmployee });
  }

  render() {
    return (
      <div className="infoCard">
        {this.state.employee ? (
          <div>
            <span id="employeeID"> ID: {this.state.employee.id} </span>
            <p id="employeeTitle"> {this.state.originalEmployee.name} </p>
            <br />
            <button
              id="saveBtn"
              className="confirmationButton"
              disabled={this.state.notModified}
              onClick={this.save}
            >
              {' '}
              Save{' '}
            </button>
            <button
              className="neutralButton"
              disabled={this.state.notModified}
              onClick={this.cancel}
            >
              {' '}
              Cancel{' '}
            </button>
            <br />
            <span className="placeholderText"> Name </span>
            <input
              className="materialInput"
              value={this.state.employee.name}
              onChange={e => {
                this.handleChange('name', e.target.value);
              }}
            />
            <span className="placeholderText"> Phone Number </span>
            <input
              className="materialInput"
              value={this.state.employee.phone}
              onChange={e => {
                this.handleChange('phone', e.target.value);
              }}
            />
            <span className="placeholderText"> Title </span>
            <input
              className="materialInput"
              value={this.state.employee.title}
              onChange={e => {
                this.handleChange('title', e.target.value);
              }}
            />
          </div>
        ) : (
          <p id="noEmployee"> No Employee Selected </p>
        )}
      </div>
    );
  }
}

export default EmployeeEditor;
