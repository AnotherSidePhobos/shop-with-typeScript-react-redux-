import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import SearchAppBar from './components/Search/Search';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/detail/:productId' component={Detail}/>
      </Switch>
    </div>
  );
}

export default App;
