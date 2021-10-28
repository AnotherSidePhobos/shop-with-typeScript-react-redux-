import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import SearchAppBar from './components/PrimarySearchAppBar/PrimarySearchAppBar';
import Detail from './components/Detail/Detail';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/detail/:productId' component={Detail}/>
      </Switch>
    </div>
  );
}

export default App;
