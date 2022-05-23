import React from "react";

class FruitList extends React.Component {
    render() {
        return (
            <>
            <ul>
                {this.props.fruits.map((item,index)=>{
                    return <li key={index}>{item.name}</li>
                })}
            </ul>
            </>
        )
    }
}
export default FruitList;