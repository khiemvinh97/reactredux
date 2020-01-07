import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {firebaseApp} from './configdatabase'
import md5 from './md5'
import MyInfo from './myInfo'
import { isBreakStatement } from '@babel/types';
import cookie from 'react-cookies'

class Login extends React.Component{
    constructor(){
      super()
      this.itemsRef = firebaseApp.database().ref('Users');
        this.state= {
        text:'',
        pass:'',
        URL:'',
        check:true,
        isLoading:true
    }
    this.handleChange=this.handleChange.bind(this)
    this.SetText=this.SetText.bind(this)
    }
    handleChange(event){
      const {name,value}= event.target
      this.setState({
          [name]:value,
          
      })
    }

    componentWillMount(){
      
      
      localStorage.setItem('userid',"")

    }
   
      SetText(){  
            this.itemsRef.on('value',(snap)=>{
          snap.forEach((child)=>{
            if(child.key===this.state.text &&child.val().MatKhau===md5(this.state.pass))
            {
              cookie.save('userid',this.state.text,{path:'/'})
              localStorage.setItem('userid',this.state.text)
              localStorage.setItem('items',JSON.stringify(child))
              this.setState({
                check:true
              })
              cookie.save('check',this.state.check,{path:'/'})
              localStorage.setItem('check',this.state.check)

              }
              window.location.reload(); 


            })      
          })
          cookie.save('userid',this.state.text,{path:'/'})
          cookie.save('check',false,{path:'/'})
          localStorage.setItem('userid',this.state.text)
          localStorage.setItem('check',false)





    }
     
  render(){
    
    return(
      <Router>
        <div id='items'>
        <input value={this.state.text}  onChange={this.handleChange} name="text"></input>
        <input value={this.state.pass}  onChange={this.handleChange} name="pass"></input>
        <button onClick={this.SetText}><Link to="/">MyInfo</Link></button>
        </div>

      </Router>
    )      
  }
}

export default Login;
