import React,{ useEffect } from 'react';
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/about/About.jsx";
import Todo from "./components/todo/Todo.jsx";
import Signin from "./components/signin/Signin.jsx";
import Signup from "./components/signup/Signup.jsx";
import { useDispatch } from "react-redux";
import { authActions } from "./store";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom"; 

const App = () => {

  const dispatch = useDispatch();

// +++++++++++++++ USE OF UseEffect for persistent Login on force re-render +++++++++++++++ 
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id){
      dispatch(authActions.login());
    }
  }, [])
// +++++++++++++++++++++++++++++XXX+++++++++++++++++++++++++++++++ 

  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/todo" element={<Todo />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
  )
}

export default App;