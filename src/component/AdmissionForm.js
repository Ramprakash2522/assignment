import React, { Component } from "react";

class AdmissionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      class: "",
      yop: "",
      percentage: "",
      iserror: false,
    };
  }
  handleFirstName = (e) => {
    this.setState({ firstname: e.target.value });
  };
  handleLastName = (e) => {
    this.setState({ lastname: e.target.value });
  };
  handleClass = (e) => {
    this.setState({ class: e.target.value });
  };
  handleYOP = (e) => {
    if (e.target.value < 2018) {
      this.setState({ yop: e.target.value });
    }
  };
  handlePercentage = (e) => {
    this.setState({ percentage: e.target.value });
  };
  handleSubmit = () => {
    if (
      this.state.firstname !== "" &&
      this.state.lastname !== "" &&
      this.state.class !== "" &&
      this.state.yop !== "" &&
      this.state.percentage !== ""
    ) {
      this.props.history.push("/");
    } else {
      this.setState({ iserror: true });
    }
  };
  render() {
    return (
      <div className="container mt-5 w-50 mx-auto">
        <p>
          <strong>Admission Form</strong>
        </p>
        <p className="mt-3">First Name</p>
        <input
          className="form-control"
          type="text"
          value={this.state.firstname}
          onChange={(e) => this.handleFirstName(e)}
        />

        <p className="mt-3">Last Name</p>
        <input
          className="form-control"
          type="text"
          value={this.state.lastname}
          onChange={(e) => this.handleLastName(e)}
        />

        <p className="mt-3">Class</p>
        <input
          className="form-control"
          type="text"
          value={this.state.class}
          onChange={(e) => this.handleClass(e)}
        />

        <p className="mt-3">Year of passing</p>
        <input
          className="form-control"
          type="text"
          value={this.state.yop}
          onChange={(e) => this.handleYOP(e)}
        />

        <p className="mt-3">Percentage</p>
        <input
          className="form-control"
          type="number"
          min={0}
          max={100}
          value={this.state.percentage}
          onChange={(e) => this.handlePercentage(e)}
        />

        <button
          className="btn btn-primary w-100 mt-3"
          onClick={this.handleSubmit}
        >
          Submit
        </button>

        {this.state.iserror && (
          <div className="text-danger"> Please fill all details</div>
        )}
      </div>
    );
  }
}

export default AdmissionForm;
