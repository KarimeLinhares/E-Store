import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './themes.js';


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {

  //theme toggler
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
      <Navbar/>
        <button className='themeBtn' onClick={() => themeToggler()}>
          {
            theme === "light" ? <i className="fa fa-sun-o">Light</i> : <i className="fa fa-moon-o">Dark</i>
          }
        </button>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </StyledApp>
    </ThemeProvider>
    </>
  );
}

export default App;
