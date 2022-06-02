import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './style.css';

// import Home from "./view/pages/index";
// import ProfileIndex from "./view/profile/profileIndex";
// import FruitIndex from "./view/pages/fruit/fruitIndex";
// import FruitList from "./view/fruit";
// import FruitRegister from "./view/fruitRegister";
// import Clear from "./view/Clear"
// import Form from "./view/Form";
// const Home = React.lazy(() => import("./view/pages/index"));
// const Profile = React.lazy(() => import("./view/profile/profileIndex"));
// const Fruit = React.lazy(() => import("./view/pages/fruit/fruitIndex"));

const Loading = (<div>
  <h1>Loading</h1>
</div>);
const Main = React.lazy(() => import("./view/student/Main"));
const Register = React.lazy(() => import("./view/register/Register"));
const EmployeeList =React.lazy(()=> import("./view/employee/EmployeeList"));
const AboutUs =React.lazy(()=> import("./view/register/AboutUs"));
const Profile = React.lazy(() => import("./view/profile/profileIndex"));
const Error =React.lazy(()=> import("./view/error/Error"));
const UserList =React.lazy(()=>import("./view/employee/UserList"));
const Home =React.lazy(()=>import('./view/student/HomeIndex.js'));
const Edit=React.lazy(()=> import('./view/register/Edit'));

const App = () => {
  // const [Employee,setEmployee] = useState([
  //   {
  //       id: '1',
  //       username: "aungkhantkyaw",
  //       fullname: "Aung Khant Kyaw",
  //       email: "aungkhantkyaw@gmail.com",
  //       ph_no: "09123456789",
  //       address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
  //   },
  //   {
  //       id: '2',
  //       username: "zinminmyat",
  //       fullname: "Zin Min Myat",
  //       email: "zinminmyat@gmail.com",
  //       ph_no: "0948296244",
  //       address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
  //   },
  //   {
  //       id: '3',
  //       username: "supyaemaung",
  //       fullname: "Su Pyae Maung",
  //       email: "supyaemaung@gmail.com",
  //       ph_no: "0992857364",
  //       address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
  //   },
  //   {
  //       id: '4',
  //       username: "ayethirimon",
  //       fullname: "Aye Thiri Mon",
  //       email: "ayethirimon@gmail.com",
  //       ph_no: "092283930771",
  //       address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
  //   },
  //   {
  //       id: '5',
  //       username: "eieihtwe",
  //       fullname: "Ei Ei Htwe",
  //       email: "eieihtwe@gmail.com",
  //       ph_no: "09758917304",
  //       address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
  //   }
  // ]);
  // const [view,setView]=useState([]);
  // const detailClick=(data)=>{    
  //    setView(data);
  // }
  return (
    <>
    <Main/>
    <BrowserRouter>
      <React.Suspense fallback={Loading}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/register'component={Register}/>
          <Route path='/employee' component={EmployeeList} />
          <Route path='/aboutus' component={AboutUs}/>
          <Route path="/profile" component={Profile} />
          <Route path="/404error" component={Error}/>
          <Route path="/userlist" component={UserList}/>
          <Route path="/employee/edit" component={Edit}/>
          <Route>
            <Redirect to="/404error" />
          </Route>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
    </>
  )
  // <BrowserRouter>
  //   <React.Suspense fallback={Loading}>
  //     <Switch>
  //         <Route exact path="/" component={Home} />
  //         <Route path="/profile" component={Profile} />
  //         <Route path="/fruit" component={Fruit} />
  //       <Route>
  //         <Redirect to="/" />
  //       </Route>
  //     </Switch>
  //   </React.Suspense>
  // </BrowserRouter>
}
export default App;