import React, { Component } from 'react';
import {withRouter,NavLink} from 'react-router-dom';

class Ante extends Component {
    componentDidMount(){
        console.log('Ante.js, componentDidMount ');   
     }

     componentDidUpdate(){
      console.log('Ante.js, componentDidUpdate ');   
    }



    nePostoji=()=>{
        this.props.history.push('/nePostoji')
    }

    render() {
        return (
            <div>
                ---------------------------------------------------------
                <br/>
                Ante js. Unutar PrvaGrana.js
                <br/>
                <button onClick={this.props.clicked}>ante.js botun vodi kao prvi NavLink unuatr PrvaGrana.js</button> 
                <br/>
                <button onClick={()=>this.nePostoji()}>Ne postoji, botun unutar Ante</button>
                <br/>
                <li><NavLink  to='/drugaGranaNestedElementMate/' exact> NavLink  unutar Anta.js koji vodi na nested element DrugaGrana.js, Mate.js</NavLink></li>
             
           
            </div>
        );
    }
}

// export default withRouter(Ante);

export default Ante