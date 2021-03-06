import React from "react";

const Main = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="logo192.png" style={{width:"50px",height:"50px"}}></img></a>
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
   
        </>

    )
}
export default Main;