import RikardovSin from "./RikardovSin"
import React, { Component } from 'react';


class Rikardo extends Component {
    
    componentDidMount(){
        console.log('Rikardo.js, componentDidMount ');   
     }

     componentDidUpdate(){
      console.log('Rikardo.js, componentDidUpdate ');   
    }


    render() {
        return (
            <div>
            Ovo je Rikardo
            <RikardovSin/>
        </div>
        );
    }
}



export default Rikardo;