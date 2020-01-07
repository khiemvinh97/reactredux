import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {firebaseApp} from './configdatabase'
import Routelist from './Routelist'
import Login from './login'
import { isBreakStatement } from '@babel/types';
import Footer from './footer'

class App extends React.Component{
    constructor(){
      super()
      this.itemsRef = firebaseApp.database().ref('Users');
        this.state= {
          Userid:null
    }
  }
  componentWillMount(){
    if(localStorage.getItem('userid')!==''){
      this.setState({
            Userid:localStorage.getItem('userid'),
    })
    } else {
      this.setState({
        Userid:null
        
            })

    }
    
}
    render(){
      return(
        <div> 
          {this.state.Userid ? <Routelist/> : <Login/>}
          <Footer/>
        </div>
      )      
    }
  
    
    
  
        
  
}

export default App;
