import React,{useState,useEffect} from "react";
import { useHistory,Link } from "react-router-dom";
import { Employee } from "./Employee";
import axios from "axios";

const EmployeeList = () => {
    // const history =useHistory();
    // gotoProfile=()=>{
    //     history.push("/profile",Employee)
    // };
    const[userlist,SetUserList]=useState([]);

    useEffect(()=>{
        (async () => {
            const result = await axios.get("http://localhost:4000/api/v1/employee/getEmployeeList", {params: {username: 'mgmg'}});
    
            if(result.status === 200) {
                SetUserList(result.data.data)
            }
        })()
    });

    // useEffect(()=>{
    //     (async () => {
    //         const result = await axios.get("http://localhost:4000/api/v1/employee/getEmployeeList", {params: {id:1}});
    
    //         if(result.status === 200) {
    //             SetUserList(result.data.data)
    //         }
    //     })()
    // });
    return (
        
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src="logo192.png" style={{ width: "50px", height: "50px" }}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/register">Register</a>
                            <a className="nav-link" href="/employee">EmployeeList</a>
                            <a className="nav-link" href="/aboutus">About Us</a>
                            <a className="nav-link" href="/userlist">UserList</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
                <h1 style={{margin:'20px'}}>Employee List</h1>
            </div>
            <div className="container">
            <table className="table ">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                {userlist.length > 0 &&
                        userlist.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.username}</td>
                                    <td>{data.fullname}</td>
                                    <td>{data.email}</td>
                                    <td>{data.department}</td>
                                    {/* <td>
                                        <img src={data.avatar}/>
                                    </td> */}
                                    <td><Link to={{
                                        pathname: '/profile',
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