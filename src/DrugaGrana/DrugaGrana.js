import React, { Component } from 'react';
import {Route,NavLink, Switch,withRouter} from 'react-router-dom';
import Mate from './Mate';
import axios from 'axios';

class DrugaGrana extends Component {
   
    componentDidMount(){
        
        console.log('DrugaGrana.js, componentDidMount ');
         
     }

     componentDidUpdate(){
      console.log('DrugaGrana.js, componentDidUpdate ');   
    }
    
    render() {
       
        return (
            <div>
                Ovo je DrugaGrana.js
                <br/>
                <li><NavLink to='/drugaGranaNestedElementMate'> NavLink  unutar DrugaGrana.js koja vodi na Mate.js</NavLink></li>
                <br/>
              <br/>
              -------------------------------------------------------------------
              <br/>
                <Route path='/drugaGranaNestedElementMate' component={Mate}/>
               
                {/* Kad iskljičimo Route ovdje i ukljuimo ovaj doli Mate onda kad kliknemo na botun koji se nalazi unutar Mate.js da se prikaže njegov sin u tom slučaju komponeta
                Mate.js se neće re-rendati. */}
                {/* <Mate/> */}
                
            </div>
        );
    }
}

export default DrugaGrana;

// export default withRouter(DrugaGrana)