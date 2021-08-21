import React, { Component } from 'react';
import {Route,NavLink, Switch,withRouter} from 'react-router-dom';
import axios from 'axios';
import Ante from './Ante';


class PrvaGrana extends Component {

//Ovo sam samo stavio ovdje da se podjestimo da postoji ovaj activeClassName prop na NavLinku pa što stavimo na to će biti aktivna klasa. Postoji jođ i active klasa
//ali ovo je još bolje.  
//     <li><NavLink 
//     to='/'
//    exact
//    activeClassName='my-active'
//    activeStyle={{
//       color: '#fa923f',
//       textDecoration: 'underline' 
//    }}   >Home</NavLink></li>

//Treba skužiti kako će nam search pomoći

// <li><NavLink to={{
//     pathname: '/new-post',
//      hash: '#submit',
//      search: '?quick-submit=true'
//  }}>New Post</NavLink></li>

//VAŽNO: Kada je redirect u switch onda se mora koristi ovaj from. Mislim da mi zato nije radilo. Isto tako kad je izvan Switch mora se koristiti bez from.
/*{ <Switch> 
{this.state.auth?<Route path="/new-post" component={NewPost}/>: null}
<Route path="/posts" component={Posts}/>
<Redirect from="/new-post"  to='/'/>
 </Switch>}  */

   shouldComponentUpdate(){
     console.log('PrvaGrana shouldComponet Update');
    return true
   }

     componentDidMount(){
        console.log('PrvaGrana.js, componentDidMount ');   
     }

     componentDidUpdate(){
      console.log('PrvaGrana.js, componentDidUpdate ');   
    }

    vodiMe=()=>{
     
        this.props.history.push('/drugaGranaNestedElementMate')
    }

  render() {
        return (
            <div>
                Ovo je PrvaGrana.js
                <li ><NavLink  to='/' exact> Home tj. localhost:3000 NavLink</NavLink></li>
                 <br/>
                     <ul>
                     <li><NavLink to='/drugaGranaNestedElementMate/' exact> NavLink  unutar PrvaGrana.js koji vodi na nested element DrugaGrana.js, Mate.js</NavLink></li>
                            
                            </ul>
                    <button onClick={()=>this.vodiMe()}>Ovo je Botun unutar PrvaGrana.js koji pokreće funkcija koja ima this.props.history.push() koji vodi na također na isto path kao gornji NavLink</button>
                            <br/>
                            <li><NavLink  to='/drugaGranaNestedElementMate/matinSin'> NavLink  unutar PrvaGrana.js vodi na matinSin</NavLink></li>
                            <br/>
                            <Ante clicked={this.vodiMe}/>
                            <br/>
                ------------------------------------------------------------
            </div>
        );
    }
}
//withRouter nam služi da imamo pristup this.props.history
// export default withRouter(PrvaGrana);

export default PrvaGrana