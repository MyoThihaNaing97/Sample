import React from "react";
const FruitRegister = (props)=>{
    return(
        <div className="fruit-register-container">
            <input type="text" value={props.fruitName} onChange={props.handleChange} style={{marginLeft:"20px"}}/><br/>
            <button onClick={props.addFruit}style={{width:"20%",margin:"20px"}}>Add_Fruit</button>
        </div>
    )
}
//  class fruitRegister extends React.Component{
//      render() {
//          return(
             
//         <div className="fruit-register-container">
//             <input type="text" value={this.props.fruitName} onChange={this.props.handleChange}/><br/>
//             <button onClick={this.props.addFruit}>Add_Fruit</button>
//             <h2>{console.log(this.props)}</h2>

//         </div>
//          )      
//      }
//  }
 export default FruitRegister;