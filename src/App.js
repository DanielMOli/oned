import React, { Component } from "react";
import './App.css';
class App extends Component {
state = {
  nome: "Daniel"
}
 render() {
   return (
     <div>
       <h1> Meu nome é {this.state.nome}</h1>
     </div>
   );
 }
}
export default App;
