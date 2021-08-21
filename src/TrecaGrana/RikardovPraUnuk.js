import {withRouter,NavLink,Route} from 'react-router-dom';
import React, { Component } from 'react';

class RikardovPraUnuk extends Component {

    componentDidMount(){
        console.log('RikardovPraUnuk.js, componentDidMount ');   
     }

     componentDidUpdate(){
      console.log('RikardovPraUnuk.js, componentDidUpdate ');   
    }



    render() {
        return (
            <div>
            Ovo je RikardovPraUnuk
        </div>
        );
    }
}

export default RikardovPraUnuk;