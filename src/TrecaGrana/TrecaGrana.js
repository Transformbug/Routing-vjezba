import React, { Component } from 'react';
import {withRouter,NavLink,Route} from 'react-router-dom';
import Rikardo from "./Rikardo"

class TrecaGrana extends Component {
    componentDidMount(){
        console.log('TrecaGrana.js, componentDidMount ');   
     }

     componentDidUpdate(){
      console.log('TrecaGrana.js, componentDidUpdate ');   
    }
    render() {
        return (
            <div>
                -------------------------------------------------
                <br/>
                Treca Grana, samo ima withRouter
                <NavLink to="/Rikardo">Otvori Rikarda</NavLink>
                <br/>
                <NavLink to="/Rikardo/PraUnuk">Otvori RikardovPraUnuk</NavLink>

                <Route path="/Rikardo" component={Rikardo}/>
          
            </div>
        );
    }
}

// export default withRouter (TrecaGrana);

export default TrecaGrana