import React from "react";

class Clear extends React.Component{
    render(){
        return( 
        <div>
            <button onClick={this.props.clear}>Clear</button>
        </div>
        )
    }
}
export default Clear;