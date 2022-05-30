import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
//   let history = useHistory();

//   const { username, fullname, email, ph_no, department, address } = user;
  const [username,SetUserName]=useState("");
  const [fullname,SetFullName]=useState("");
  const [email,SetEmail]=useState("");
  const [ph_no,SetPhNo]=useState("");
  const [department,SetDepartment]=useState("");
  const [address,setAddress]=useState("");

  const handleChangeUserName=(e)=>{
      SetUserName(e.target.value);
  }
  const handleChangeEmail=(e)=>{
    SetEmail(e.target.value);
  }
  const handleChangeFullName=(e)=>{
    SetFullName(e.target.value)
  }
  const handleChangePhNo=(e)=>{
    SetPhNo(e.target.value)
  }
  const handleChangeAddress=(e)=>{
    setAddress(e.target.value)
  }
  const handleChangeDepartment=(e)=>{
    SetDepartment(e.target.value)
  }
//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post(
//       "http://localhost:4000/api/v1/employee/createEmployee",
//       user
//     );
//     history.push("/employee");
//   };

  // const {id}=useParams();
  // useEffect(()=>{
  //     loadUser();
  // },[]);
  // const loadUser =async()=>{
  //     const res =await axios.get(`http://localhost:4000/api/v1/employee/getEmployeeList`)
  // }
  const Save=async(e)=>{
    let obj = {
        username: username,
        fullname: fullname,
        email: email,
        ph_no: ph_no,
        department: department,
        address: address,
      };
      const result = await axios.post("http://localhost:4000/api/v1/employee/createEmployee", obj)
      console.log(result);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="logo192.png"
              style={{ width: "50px", height: "50px" }}
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/register">
                Register
              </a>
              <a className="nav-link" href="/employee">
                EmployeeList
              </a>
              <a className="nav-link" href="/aboutus">
                About Us
              </a>
              <a className="nav-link" href="/userlist">
                UserList
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Employee Registration</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="row mb-3">
          <div className="col">
            <label>UserName:</label>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter UserName"
              name="username"
              value={username}
              onChange={(e) => handleChangeUserName(e)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label>FullName:</label>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter FullName"
              name="fullname"
              value={fullname}
              onChange={(e) => handleChangeFullName(e)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label>Email:</label>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              required
              name="email"
              value={email}
              onChange={(e) => handleChangeEmail(e)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label>Ph No:</label>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter PhoneNumber"
              name="ph_no"
              value={ph_no}
              onChange={(e) => handleChangePhNo(e)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label>Department</label>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Department"
              name="department"
              value={department}
              onChange={(e) => handleChangeDepartment(e)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label>Address:</label>
          </div>
          <div className="col">
            <textarea
              type="text"
              className="form-control"
              placeholder="Enter Address"
              name="address"
              value={address}
              onChange={(e) => handleChangeAddress(e)}
            />
          </div>
        </div>
        <button className="btn btn-primary" style={{ borderRadius: "20px" }} onClick={(e)=>Save(e)}>
          Save
        </button>
      </div>
      {/* <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          
        </div> */}
    </>
  );
};

export default Register;
