import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="banner">
      <div class="card bg-dark text-white border-0">
        <img src="/assets/welcome.jpg" class="card-img" alt="background" height={600} />
        <div class="card-img-overlay">
          <div className="card-img-overlay d-flex align-items-end flex-column">
            <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
            <p class="card-text lead fs-2">Veja todos os nossos produtos</p>
          </div>
        </div>
      </div>
      <Products></Products>
    </div>
  );
};

export default Home;
