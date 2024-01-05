
//import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import "./App.css";
import { useState,useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home';
import Form from './components/Form';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';



function App() {
//для хранения данных туров(tyrs)
const[tyrs, setTyrs] = useState([])

useEffect (()=>{
async function axiosData(){
  const tyrsData = 
  await axios.get('https://6461235e185dd9877e37e67d.mockapi.io/tyrs')

  setTyrs(tyrsData.data)
}
axiosData();
},[])

  return (
    <div>   

    <Router>
      <Header/>
        <Routes>

        <Route path='/favorites'
          element={
            <Favorites/>
          }
          />

        <Route path='/'
          element={
            <Home
              item={tyrs}
            />
          }
          /> 

        <Route path='/form'
          element={
            <Form
            />
          }
          /> 

        </Routes>
  </Router>

  <Footer/>

    </div>

  );
}

export default App;
