import React from "react";

const AboutUs =()=>{
    return(
        <>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                        <a className="nav-link" href="/userlist">UserList</a>
                    </div>
                </div>
            </div>
        </nav> */}
        <div style={{display:'flex',flexDirection:'column', alignItems:"center"}}>
            <h1>About Us</h1>
            <div className="container">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            
        </div>
        </>
    )
}

export default AboutUs