import React, {useState, useEffect} from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Products = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  // API
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if(componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)
      }

      return () => {
        componentMounted = false;
      }
    }
    getProducts();
  }, []);

  // animação de loading
  const Loading = () => {
    useEffect(()=>{
      setLoading(true)
    }, [])
    
    return(
      <>
        <div className='load d-flex justify-content-center'>
          {
            loading ? 
            <ClipLoader color={'#000'} loading={loading} size={100} /> : null
          }

        </div>
      </>
    );
  };

  // filtro de categorias
  const filterProduct = (cat) => {
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }

  // categorias
  const ShowProducts = () => {
    return (
      <>
        <div className='buttons d-flex justify-content-center mb-5 pb-5'>
          <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>Tudo</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Seção Masculina</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Seção Feminina</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Joalheria</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Eletrônicos</button>
        </div>
        {filter.map((product)=>{
          return(
            <>
              {/* quadros dos produtos */}
              <div className='col-md-3 mb-4'>
                <div class="card h-100 text-center p4" key={product.id}>
                  <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                  <div class="card-body">
                    <h6 class="card-title mb-0">{product.title.substring(0,20)}...</h6>
                    <p class="card-text">
                      ${product.price}
                    </p>
                    <a href="#" class="btn btn-outline-dark fw-bold">Compre Agora</a>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    );
  }


  return (
    <div>
      
      {/* título */}
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center'>Produtos Novos</h1>
            <hr />
          </div>
        </div>

        {/* só mostre os produtos depois de carregar */}
        <div className='row justify-content-center'>
          {loading ? <Loading /> : < ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
