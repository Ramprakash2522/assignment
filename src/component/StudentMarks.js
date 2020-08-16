import React, { Component } from "react";
import axios from "axios";

class StudentMarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentDetail: [],
      resultDetail: [],
    };
  }
  componentWillMount() {
    axios.get("./Data.json").then((res) => {
      if (res && res.data) {
        this.setState({ studentDetail: res.data });
      }
    });
  }
  getStudentTotal = (result) => {
    let total =
      Number(result.English) + Number(result.Maths) + Number(result.Science);

    return total;
  };

  getStudentResult = (result) => {
    let status = "Pass";
    if (
      Number(result.English) < 20 ||
      Number(result.Maths) < 20 ||
      Number(result.Science) < 20
    ) {
      status = "Fail";
    }
    return status;
  };
  handleForm = () => {
    this.props.history.push("/form");
  };
  render() {
    const { studentDetail } = this.state;

    return (
      <div className="container mt-5 w-100 text-center">
        <div className="w-100 text-right mb-5">
          <button className="btn btn-info" onClick={this.handleForm}>
            Create Form
          </button>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th colSpan="4" className="text-left pl-5">
                {" "}
                Students Result Board
              </th>
            </tr>
            <tr>
              <th scope="col">Student Name</th>
              <th scope="col">Roll Number</th>
              <th scope="col">Total Marks</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {studentDetail && studentDetail.length > 0
              ? studentDetail.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td className={""}>{data.name}</td>
                      <td>{data.rollNumber}</td>
                      <td>{this.getStudentTotal(data.marks)}</td>
                      <td>{this.getStudentResult(data.marks)}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentMarks;
