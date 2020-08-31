import React from 'react'
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom'
import Başka from './Başka'
import Farklı from './Farklı'
import Navi from './Navi'
import ItemDetail from './ItemDetail'


function App() {
  
  return (
    <Router>
      <Navi/>
     
      <Switch>
      <Route path="/" exact component={Home}></Route>
        <Route path="/başka" component={Başka}></Route>
        <Route path="/farklı" exact component={Farklı}></Route>
        <Route path="/farklı/:id" component={ItemDetail}></Route>

      </Switch>
    </Router>
  );
}

function Home(){
  return(
    <h1>Home Page</h1>
  )
}

export default App;
