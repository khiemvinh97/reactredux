import React from 'react'
import { userInfo } from 'os'
import {firebaseApp} from './configdatabase'
import { BrowserRouter as Router, Route, Link ,useHistory ,Switch } from "react-router-dom";
import MyInfo from './myInfo'

class Update extends React.Component {

    
    
    constructor(props){
        super(props)
        this.state= {
            text:'',
            UserInfo:[],
            hometown:'',
            hobby:'',
        }

        this.handleChange=this.handleChange.bind(this)
        this.UpdateItem=this.UpdateItem.bind(this)
        
    }


   

    componentWillMount(){


        this.setState({
            Userid:localStorage.getItem('userid'),
            check:localStorage.getItem('check'),
            UserInfo:JSON.parse(localStorage.getItem('items')),

        })
    }

    handleChange(event){
        const {name,value}= event.target
        this.setState({
            [name]:value,
            
        })
      }
      
      UpdateItem(){
          let a = this.state.UserInfo
          JSON.parse( JSON.stringify(a))
          a.HoTen=this.state.text
          a.QueQuan=this.state.hometown
          a.SoThich=this.state.hobby
          firebaseApp.database().ref('Users').child(this.state.Userid).update(a).then(
                window.location.reload()

            )
        }

    render(){

        return(
            <div>
                <Router>
                <div><h1>Update {this.state.Userid}</h1></div>
                
                <div> 
                <h2 style={{display:'inline'}}>Ho Ten : </h2>
                <input value={this.state.text}  onChange={this.handleChange} name="text" placeholder="Nhap Ten Moi"></input>
                </div>
                <div> 
                <h2 style={{display:'inline'}}>Que Quan : </h2>
                <input value={this.state.hometown}  onChange={this.handleChange} name="hometown" placeholder="Nhap que quan"></input>
                </div> <div> 
                <h2 style={{display:'inline'}}>So Thich : </h2>
                <input value={this.state.hobby}  onChange={this.handleChange} name="hobby" placeholder="Nhap so thich"></input>
                </div>       
                <br/>
                <div>
                    <button onClick={this.UpdateItem}><Link to='/'>Update</Link></button>
                    

                </div>
                </Router>
                
            </div>
        )
    }
    
}


export default Update