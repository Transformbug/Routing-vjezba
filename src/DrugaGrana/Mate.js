import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom';
import axios from 'axios';
import MatinSin from './matinSin';


class Mate extends Component {
 
    
    componentDidMount(){
        console.log('Mate.js, componentDidMount ');  
        
     }

     componentDidUpdate(){
      console.log('Mate.js.js, componentDidUpdate ');   
    }

    componentWillUnmount(){
        console.log('componetWillUmount, Mate.js');
    }

    matinSin=()=>{
        // this.props.history.push('matinSin')
       
        this.props.history.push({pathname: '/drugaGranaNestedElementMate/'+ 'matinSin'})
    }

    nePostoji=()=>{
        this.props.history.push('/nePostoji')
    }
    
    render() {
        return (
            
            <div style={{color: 'red'}} >
                Ovo je Mate.js koji je unutar DrugaGrana.js PRIKAZAN,PRIKAZAN,PRIKAZAN,PRIKAZAN
                <br/> 
                 <button onClick={()=>this.nePostoji()}>Ne postoji botun unutar Mate.js</button>
                 <br/>
                 <br/>
                <button onClick={()=>this.matinSin()}>Mate js. botun vodi do matinSin putem props.history.push</button>
                <br/>
                <li><NavLink  to='/drugaGranaNestedElementMate/matinSin'> NavLink  unutar Mate.js vodi na matinSin</NavLink></li>
                <br/>
                --------------------------------------------------------------------------------    
                {/* <Route path='/matinSin' component={MatinSin}/> */}
                <Route path='/drugaGranaNestedElementMate/matinSin' component={MatinSin}/>

              
           
               </div>
        );
    }
}

export default Mate;