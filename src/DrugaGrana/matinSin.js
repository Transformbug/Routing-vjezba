import React, { Component } from 'react';
import MatinUnuk from './matinUnuk';
import {Route,NavLink} from 'react-router-dom';

class matinSin extends Component {
    
    componentDidMount(){
        console.log('matinSin.js, componentDidMount ');  
        // console.log(this.props.match);
     }

     componentDidUpdate(){
      console.log('matinSin.js, componentDidUpdate ');   
    }
 
    componentWillUnmount(){
        console.log('componetWillUmount, matinSin.js');
    }

    render() {
     console.log('this.props na matinsin',this.props);
        return (
            <div style={{color: 'green'}}>
                Ovo je matin sin, Ovo je matin sin, Ovo je matin sin
                <br/>
                <li><NavLink  to={this.props.match.path+'/matinUnuk'}> NavLink  unutar matinSin vodi na matinUnuk</NavLink></li>
                <Route path={this.props.match.path+'/matinUnuk'} component={MatinUnuk}/>
              
            </div>
        );
    }
}

export default matinSin;