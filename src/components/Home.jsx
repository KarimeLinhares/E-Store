import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="containerHome">
      <div className="banner px-5">
        <div className="card bg-dark text-white border-0">
          <img src="/assets/welcome.jpg" className="card-img" alt="background" />
          <div className="card-img-overlay">
            <div className="card-img-overlay d-flex align-items-end flex-column">
              <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
              <p className="card-text lead fs-2">Veja todos os nossos produtos</p>
            </div>
          </div>
        </div>
        <Products></Products>
      </div>
    </div>
  );
};

export default Home;
