import React from 'react';
// import './App.css';
import Cards from './components/Cards'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Navbar from './components/Navbar';
import AnniversaryCake from './components/pages/AnniversaryCake';
import BirthdayCake from './components/pages/BirthdayCake';
import CustomCake from './components/pages/CustomCake';
import Forms from './components/Forms'

function App() {
  return (
  <>
  <Router>
  {/* <Navbar /> */}
  <Switch>
  <Route path ='/' exact component ={Cards}/>
   <Route path = '/anniversarycake' component = {AnniversaryCake} />
   <Route path = '/birthdaycake' component = {BirthdayCake} />
   <Route path = '/customcake' component = {CustomCake} /> 
   <Route path = '/forms' component = {Forms} /> 
  </Switch>
  </Router>
  </>
  );
}

export default App;
