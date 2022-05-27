import React from "react";
import { Link ,useHistory } from "react-router-dom";

const Home = () => {
    const history =useHistory();

    const gotoProfile=()=>{
        history.push("/profile",{name:"Myo Thiha Naing"});
    };
    return (
        <>
            <h1>Welcome From Home</h1>
            <div style={{display:'flex',flexDirection:'column', alignItems:"center"}}>
                <Link to={{
                    pathname: '/profile',
                    state: {name:'Brycen Myanmar'}
                }}>Go to Profile</Link><br />
                <Link to="/fruit">Go to Fruit</Link>
                <button onClick={gotoProfile}>Go to profile via button</button>
            </div>
          

        </>
    )
}

export default Home;