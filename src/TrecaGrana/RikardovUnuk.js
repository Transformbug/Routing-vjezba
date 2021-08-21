import RikardovPraUnuk from "./RikardovPraUnuk"
import {withRouter,NavLink,Route} from 'react-router-dom';
import React, { Component } from 'react';

class RikardovUnuk extends Component {

    componentDidMount(){
        console.log('RikardovUnuk.js, componentDidMount ');   
     }

     componentDidUpdate(){
      console.log('RikardovUnuk.js, componentDidUpdate ');   
    }


    render() {
        return (
            <div>
            Ovo je Rikardov unuk
                         
            <Route path="/Rikardo/PraUnuk" component={RikardovPraUnuk}/>

        </div>
    );
        
    }
}


export default RikardovUnuk;

