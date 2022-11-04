import React from 'react';

// feito com bootstrap
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">ArcH-Store</a>
          
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
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Produtos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contato</a>
              </li>
            </ul>
            
            {/* carrinho */}
            <div className="buttons">
              <a href='' className="btn btn-outline-dark">
                <i className="fa fa-shopping-cart me-1"></i> 
                Carrinho (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;