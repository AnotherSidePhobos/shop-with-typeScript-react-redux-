import React, { useState, useContext } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import SearchAppBar from './components/PrimarySearchAppBar/PrimarySearchAppBar';
import Detail from './components/Detail/Detail';
import Cart from './components/Cart/Cart';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import {ThemeContext, themes} from './context/theme-context';

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light)

  const theme = useContext(ThemeContext)
  const toggleTheme = () => {
    debugger
    setCurrentTheme((prevCurrentTheme) => 
    prevCurrentTheme === themes.light ? themes.dark : themes.light)
  }
  
  return (
    <div>
     <ThemeContext.Provider value={currentTheme}>
        <div className="App">
          <SearchAppBar toggleTheme={toggleTheme} currentTheme={currentTheme}/>
            <div className='main'>
              <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                <Route path='/detail/:productId' component={Detail}/>
              </Switch>
            </div>
          
        </div>
     </ThemeContext.Provider>
        
    </div>
  );
}

export default App;
