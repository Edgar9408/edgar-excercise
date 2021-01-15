import React from "react"
import { Route } from 'react-router-dom';
import FormUser from "./components/FormUser/index.jsx"
import DetailsUser from "./components/DetailsUser/index.jsx"
import ListUsers from "./components/ListUsers/index.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/"
        render={()=> <FormUser/>}
      />
      <Route exact path="/"
        render={()=> <ListUsers/>}
      />
      <Route exact path="/user/:id"
        render={({match})=> <DetailsUser userId={match.params.id}/>}
      />
    </div>
  );
}

export default App;
