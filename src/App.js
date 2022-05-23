import React from "react";
import './style.css'
import FruitList from "./view/fruit";
class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
     fruits:[
       {name:"Apple"},
       {name:"Orange"},
       {name:"Lemon"}
      ],
      userdata:[
        {name:"Mg Mg", age:"15"},
        {name:"Ma Ma", age:"21"},
        {name:"Mya Mya", age:"16"},
      ]
   };
 }
  render() {
    return (
      <div className="fruit-container">
        <h1>Hello World</h1>
        {/* <FruitList userdata={this.state.userdata}/> */}
        <FruitList fruits={this.state.fruits}/>
      </div>
    )

  }
}
export default App