import React, { Component } from 'react';

class matinUnuk extends Component {

  componentDidMount(){
        console.log('matinUnuk.js, componentDidMount ');  
        
     }

     componentDidUpdate(){
      console.log('matinUnuk.js, componentDidUpdate ');   
    }
    
    render() {
        return (
            <div style={{color: 'blue'}}>
                -------------------------------------
                <br/>
                matin unuk matin unuk matin unuk
            </div>
        );
    }
}

export default matinUnuk;