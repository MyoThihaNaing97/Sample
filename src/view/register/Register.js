import React from "react";

const Register =()=>{
    const Save=()=>{
        alert("Save Successfully");
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="logo192.png" style={{width:"50px",height:"50px"}}></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/register">Register</a>
                        <a className="nav-link" href="/employee">EmployeeList</a>
                        <a className="nav-link" href="/aboutus">About Us</a>
                    </div>
                </div>
            </div>
        </nav>
        <div style={{display:'flex',flexDirection:'column', alignItems:"center"}}>
            <h1>Employee Registration</h1>
        </div>
        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <div className="row mb-3">
            <div className="col">
                <label>UserName:</label>
            </div>
            <div className="col">
                  <input type="text"className="form-control" placeholder="Enter UserName"/>      
                </div>
            </div>
            <div className="row mb-3">
            <div className="col">
                <label>FullName:</label>
            </div>
            <div className="col">
                  <input type="text"className="form-control" placeholder="Enter FullName"/>      
                </div>
            </div>
            <div className="row mb-3">
            <div className="col">
                <label>Email:</label>
            </div>
            <div className="col">
                  <input type="text"className="form-control" placeholder="Enter Email"/>      
                </div>
            </div>
            <div className="row mb-3">
            <div className="col">
                <label>Ph No:</label>
            </div>
            <div className="col">
                  <input type="text"className="form-control" placeholder="Enter PhoneNumber"/>      
                </div>
            </div>
            <div className="row mb-3">
            <div className="col">
                <label>Address:</label>
            </div>
            <div className="col">
                  <input type="text"className="form-control" placeholder="Enter Address"/>      
                </div>
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <button className="btn btn-primary" style={{ borderRadius: '20px' }} onClick={Save}>Save</button>
        </div>
        </>
    )
}

export default Register;