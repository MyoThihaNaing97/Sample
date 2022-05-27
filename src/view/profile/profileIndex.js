import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProfileIndex = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location.state)
        if (location.state !== undefined) {
            SetUserName(location.state.username)
            SetFullName(location.state.fullname)
            SetEmail(location.state.email)
            SetPhNo(location.state.ph_no)
            SetAddress(location.state.address)
        }
    })
    const [username, SetUserName] = useState("");
    const [fullname, SetFullName] = useState("");
    const [email, SetEmail] = useState("");
    const [ph_no, SetPhNo] = useState("");
    const [address, SetAddress] = useState("");
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="logo192.png" style={{ width: "50px", height: "50px" }}></img></a>
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
            <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                <h1>Employee Detail</h1>
            </div>
                <div className="row mb-3 ">
                    <div className="col-4">
                        <label>UserName :</label>
                    </div>
                    <div className="col-4">
                       {username}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-4">
                        <label>FullName :</label>
                    </div>
                    <div className="col-4">
                        {fullname}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-4">
                        <label>Email :</label>
                    </div>
                    <div className="col-4">
                        {email}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-4">
                        <label>Ph No :</label>
                    </div>
                    <div className="col-4">
                        {ph_no}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-4">
                        <label>Address :</label>
                    </div>
                    <div className="col-4">
                        {address}
                    </div>
                </div>


        </>
    )
}
export default ProfileIndex;