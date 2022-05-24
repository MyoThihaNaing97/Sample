import React from "react";

const FruitList = (props)=>{
    return(
        <ul>
            {props.fruits.map((fruit,index)=>{
                // return 
                return(
                    <div key={index}>
                        <li>Fruit Name: {fruit.name}<br/> Price :{fruit.price}</li>
                        
                    </div>
                )
            })}
        </ul>
    )
}
// class FruitList extends React.Component {
//     render() {
//         return (
//             <>
//             <ul>
//                 {this.props.fruits.map((item,index)=>{
//                     return <li key={index}>{item.name} Price : {item.price}</li>
//                 })}
//                 {/* {this.props.userdata.map((item, index) => {
//                     return <li key={index}>{item.name}</li>
//                 })} */}
//                 {/* {this.props.fruits.map((item,index)=>{
//                     return <li key={index}>{item.name}</li>
//                 })} */}
//             </ul>
//             </>
//         )
//     }
// }
export default FruitList;