import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Route, Link ,useHistory } from "react-router-dom";
import { createStore } from 'redux';
import {firebaseApp} from './configdatabase'
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList'




class MyInfo extends React.Component{
    constructor(props){
        super(props)    
        this.logout=this.logout.bind(this)
        this.state={    
            isLoading:true,
            item:[],
            text:'',
            dem:1,
            Infouser:[],
            loading:false,
            message:'',
            Userid:localStorage.getItem('userid'),
            check:localStorage.getItem('check'),
        }
        this.Loading=this.Loading.bind(this)
        this.Onfinish=this.Onfinish.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.SetText=this.SetText.bind(this)
        this.DeleteText=this.DeleteText.bind(this)
        this.deleteOne=this.deleteOne.bind(this)
        this.itemsRef = firebaseApp.database().ref('Users');
    }
        

    
      Loading(Onfinish){
          console.log('haizz')
         return (
            Onfinish()
         )
      }
      Onfinish(){
        return (
            <div>
                <Router><h1>Welcome {this.state.Userid}</h1>
                {this.state.Infouser.map((value)=>{
                    return(
                        <div>
                        <h3>Ho Ten : {value.HoTen}</h3>
                        <h3>Que Quan: {value.QueQuan}</h3>
                        <h3>So Thich: {value.SoThich}</h3>
                        </div>
                    )
                })}
                
                <br/>
                <button onClick={this.logout}><Link to="/">Return</Link></button>
                </Router>
                
            </div>
        ) 

      }
      componentDidMount() {
        this.itemsRef.on('value', (snap) => {
            var items = [];
            snap.forEach((child) => {
                if(child.key===localStorage.getItem('userid')){
                  items.push({
                      id: child.key,
                      HoTen: child.val().HoTen,
                      QueQuan:child.val().QueQuan,
                      SoThich:child.val().SoThich,
                      MatKhau:child.val().MatKhau,
                    });
                }
            });
            let a = items
            JSON.parse( JSON.stringify(a))
            console.log(a)
            this.setState({
                Infouser:a,
            }
            )
            console.log(this.state.Infouser)
        });        
      }


    logout(){
      
        localStorage.clear()
        window.location.reload(); 

    }
    handleChange(event){
        const {name,value}= event.target
        this.setState({
            [name]:value,
            
        })
      }
      SetText(){
            let a= this.state.item
            let b = {
                "text" : this.state.text,
                "key": this.state.dem
            }
            a.push(b)
            this.setState({
                text:'',
                item:a,
                dem:this.state.dem+1
            })
            console.log(a)
      }
      deleteOne(){            
      }

  


      DeleteText(){
          this.setState({
              item:[]
          })
      }

    render(){
       
            if(this.state.check==='true' && this.state.Userid !==""){
                console.log(this.state.check)
                return(
                    <div>
                        {this.Loading(this.Onfinish)}
                        <br/>
                        <div >
                            <AddTodoForm/>
                            <TodoList/>
                    </div>
                    </div>
                    

                ) 
            }
            else {
                console.log(this.state.check)
                    return(
                    <div>
                        <Router>
                        <h1>Wrong Id or password</h1>
                        <button onClick={this.logout}><Link to="/">Return</Link></button>
                        </Router>                               
                    </div>)           
        }
        

    }
}
    
          
    



export default MyInfo
