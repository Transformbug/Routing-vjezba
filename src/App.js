import {BrowserRouter} from 'react-router-dom';
import PrvaGrana from './PrvaGrana/PrvaGrana';
import DrugaGrana from './DrugaGrana/DrugaGrana';
import TrecaGrana from './TrecaGrana/TrecaGrana';

import React, { Component } from 'react';


class App extends Component {

  componentDidUpdate() {
    console.log('App.js, componentDidUpdate metoda');
  }
  
  componentDidMount() {
   console.log('App.js, componentDidMount metoda');
  }

  //VAŽNO:Kada se dogodi klik na neki link ili programmatically promjenimo neki path sa history.push() onda će se re-redatti:
  //-Svi elementi koji su unutar withRoutera
  //-Element čiji je path tek sad aktivan će se mountati i svi njegovi ancesotri koji su unutar Route će se aktivirati tj. biti će u update fazi osim ako
  //su unutar BrowerRouter i nisu unutar withRoutera. Ukoliko postje obične komponte koje nisu unutar Route između komponeti sa Route opet će se svi ancestori unutar Route
  //ponovno aktivirat dok će se ti obične komponte između također re-rendati jer kada se prent komponet tj. ancetsor kompet re-renda onda će i descendet komponete.
  //Može se dogoditi da se promjetni neki path i niti jedan element se ne treba mountati nego se samo promjeni vrijednost patha nego elementa pa će se dogodit
  //upadta faza samog elementa i njegovih ancestoira unutar Route tj. isti postupak kao kada je riječ o mountingu.
  //Mislim da je dobar primjer toga kada koristimo onaj :id 
  
  //VAŽNO: kada daješ ime nekom pathu unutar Route i taj Route je unutar nekog druga Route taj path mora imati naziv "/imaPathaOdAncestorRoute/noviRoutePath"
  //tj. mora imati ovaj slash između.
  //VAŽNO: Redirect unutar Swithca treba imati from inače će biti onaj problem.
  //VAŽNO: pogledaj React screenoshove i tamo React Router folder
  
  render() {
    return (
      <BrowserRouter> 
      <div className="App">
        <PrvaGrana />
        <DrugaGrana/>
      <TrecaGrana/> 
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

