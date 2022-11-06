import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// feito com bootstrap
const Navbar = () => {

  //muda o número de produtos adicionados ao carrinho
  const state = useSelector((state) => state.handleCart)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-3" to="/">ArcH-Store</NavLink>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        
          {/* links internos */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Produtos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Sobre</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Contato</NavLink>
              </li>
            </ul>
            
            {/* carrinho */}
            <div className="buttons">
              <NavLink to='/cart' className="btn btn-outline-dark">
                <i className="fa fa-shopping-cart me-1"></i> 
                Carrinho ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;