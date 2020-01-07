import React from 'react'
import MyInfo from './myInfo'
import { BrowserRouter as Router, Route, Link ,useHistory ,Switch } from "react-router-dom";
import Update from './Update'


function Routelist() {
    return(
            <Router>
                <h1 style={{display:'inline', paddingRight:'10px'}}><Link  to="/">MyInfo</Link></h1>
                <h1 style={{display:'inline', paddingRight:'10px'}}><Link to="/Update">Update</Link></h1>
                <Switch>
                <Route exact  path="/" component={MyInfo}></Route>
                <Route path="/Update" component={Update}></Route>
                </Switch>
            </Router>
    )
    
}
export default Routelist