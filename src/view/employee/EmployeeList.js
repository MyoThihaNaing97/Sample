import React from "react";
import { useHistory,Link } from "react-router-dom";
import { Employee } from "./Employee";

const EmployeeList = () => {
    // const history =useHistory();
    // gotoProfile=()=>{
    //     history.push("/profile",Employee)
    // };
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
                <h1 style={{margin:'20px'}}>Employee List</h1>
            </div>
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phno</th>
                        <th>Address</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {Employee.map((data,index)=>{       
                        return(
                            <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.username}</td>
                            <td>{data.fullname}</td>
                            <td>{data.email}</td>
                            <td>{data.ph_no}</td>
                            <td>{data.address}</td>
                            <td><Link to={{
                                pathname:'/profile',
                                state: data
                            }}>Detail</Link>
                            </td>
                        </tr>
                        )         
                    })}
                </tbody>
            </table>
        </div>
            
        </>
    )
}

export default EmployeeList;