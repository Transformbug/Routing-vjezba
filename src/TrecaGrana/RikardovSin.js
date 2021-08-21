import RikardovUnuk from "./RikardovUnuk"
import React, { Component } from 'react';

class RikardovSin extends Component {

    componentDidMount(){
        console.log('RikardovSin.js, componentDidMount ');   
     }

     componentDidUpdate(){
      console.log('RikardovSin.js, componentDidUpdate ');   
    }


    render() {
        return (
            <div>
            Ovo je Rikardov Sin
            <RikardovUnuk/>
        </div>
           
        );
    }
}



export default RikardovSin;