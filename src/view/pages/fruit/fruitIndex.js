import React ,{useState,useEffect} from "react";
import FruitRegister from "./fruitRegister";
import FruitList from "./fruit";

const FruitIndex =()=>{
      const [fruits, setFruits] = useState([
    { name: "Apple", price: 3000 },
    { name: "Orange", price: 100 },
    { name: "Lemon", price: 3000 },
    { name: "Strawberry", price: 2500 },
    { name: "Berry", price: 1330 }
  ]);
  const [fruitName, setFruitName] = useState("");
  const [title, setTitle] = useState("Fruit List");

  useEffect(()=>{
    setTimeout(()=>{
      setTitle("Fruit Data")
    },3000);
    let price =fruits.filter((item)=>{
      return item.price === 3000;
    
    })
    setFruits(price);
    console.log(price)
    // let price =fruits.filter((=>{
    //   return item.price===3000;
      
    //   setFruits(price);
    // }))
    console.log(price);
  },[])


  const handleChange = (e)=>{
    setFruitName(e.target.value);
  }
  const addFruit =()=>{
    setFruits([...fruits,{name:fruitName}]);
    setFruitName("");
  }
  return (
    <div className="fruit-container">
      <h1>{title}</h1>
      <FruitList fruits={fruits} />
      <FruitRegister fruitName={fruitName}
        handleChange={handleChange}
        addFruit={addFruit} />
    </div>
  )
}
//Class Component
// class App extends React.Component {
//  constructor(props){
//    super(props);
//    this.state={
//      fruits:[
//        {name:"Apple",price:3000},
//        {name:"Orange",price:100},
//        {name:"Lemon",price:3000},
//        {name:"Avocado",price:2000},
//        {name:"Watermelon",price:3000},
//        {name:"Strawberry",price:1000},
//       ],
//       fruitName:"",
//       title: "Fruit List"
//    };

//  }

//  componentDidMount (){
//   setTimeout(() => {
//     this.setState({title:"Fruit Data"})
//   }, 3000);
// };
// componentDidUpdate() {
//   alert("Update")
// }
//  handleChange = (e)=>{
//    this.setState({fruitName:e.target.value})
//  }
//  addFruit = ()=>{
//    this.setState({fruits:[...this.state.fruits,{name:this.state.fruitName}],
//     fruitName:""
//   })

// }

//   render() {

//     return (
//       <div className="fruit-container">
//         <h1>{this.state.title}</h1>
//         {/* <FruitList userdata={this.state.userdata}/> */}
//         <FruitList fruits={this.state.fruits}/>
//         <FruitRegister fruitName={this.state.fruitName} 
//         handleChange={this.handleChange}
//         addFruit={this.addFruit} />
//         {/* <Clear clear={this.clear}/> */}
//       </div>
//     )

//   }
// }
export default FruitIndex;