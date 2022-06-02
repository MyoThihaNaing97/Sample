import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfileIndex = () => {
    const location = useLocation();
    const [user,SetUser]=useState({
        first_name:"",
        last_name:"",
        email:"",
        avatar:""
    });
    // const { id } = useParams();
    // useEffect(() => {
    //   loadUser();
    // }, []);
    // const loadUser = async () => {
    // };
    // const { id } = useParams();
    // useEffect(() => {
    //     (async ()=>{
    //         const res = await axios.get(`https://reqres.in/api/users/${id}`);
    //         SetUser(res.data.data);
    //     })()
    // });
     // console.log(location.state)
     useEffect(()=>{
        if (location.state !== undefined) {
            SetUser(location.state)
        }
     })
        
            // SetUserName(location.state.username)
            // SetFullName(location.state.fullname)
            // SetEmail(location.state.email)
            // SetPhNo(location.state.ph_no)
            // SetAddress(location.state.address)
       
    // const [username, SetUserName] = useState("");
    // const [fullname, SetFullName] = useState("");
    // const [email, SetEmail] = useState("");
    // const [ph_no, SetPhNo] = useState("");
    // const [address, SetAddress] = useState("");
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            </nav> */}
            <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                <h1>Employee Detail</h1>
            </div>
            <div style={{flexDirection:'column', alignItems:'center'}} className="container">
            <div className="row mb-3 ">
                    <div style={{textAlign:'end'}} className="col">
                        <label >FirstName:</label>
                    </div>
                    <div className="col style={{textAlign:'end'}}">
                        <label style={{textAlign:'left'}}>{user.first_name}</label>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col" style={{textAlign:'end'}}>
                        <label  >LastName:</label>
                    </div>
                    <div className="col">
                        <label style={{textAlign:'left'}}>{user.last_name}</label>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col" style={{textAlign:'end'}}>
                        <label >Email:</label>
                    </div>
                    <div className="col">
                        <label style={{textAlign:'left'}}>{user.email}</label>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col" style={{textAlign:'end'}}>
                        <label >Avatar:</label>
                    </div>
                    <div className="col">
                        <img src={user.avatar} />
                    </div>
                </div>
                {/* <div className="row mb-3">
                    <div className="col-2">
                        <label>Ph No :</label>
                        {ph_no}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-2">
                        <label>Address :</label>
                        {address}
                    </div>
                </div> */}
            </div>
        </>
    )
}
export default ProfileIndex;