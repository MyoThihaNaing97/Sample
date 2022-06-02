import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Edit =()=>{
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
    return(
        <>
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Employee Registration</h1>
      </div>
      <form
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
              required
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
              required
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
              required
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
              required
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
              required
            />
          </div>
        </div>
        <Link className="btn btn-primary" style={{ borderRadius: "20px" }} to="/employee" onClick={(e)=>Save(e)}>
          Save
        </Link>
      </form>
        </>
    )
}

export default Edit;