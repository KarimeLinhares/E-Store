import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

//página do produto
const Product = () => {

  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  //configuração a store
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
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
            <ClipLoader color={'#FB2576'} loading={loading} size={100} /> : null
          }
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return(
      <>
        <div className='px-4 my-5 bg-light rounded-3 py-5'>
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6 py-5 '>
                <img src={product.image} alt={product.title} height='300px' width={300} />
              </div>
              <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>
                  {product.category}
                </h4>
                <h1 className='display-5 text-black'>66
                  {product.title}
                </h1>
                <p className='lead fw-bolder text-black'>
                  Rating {product.rating && product.rating.rate}
                  <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4 text-black'>
                  $ {product.price}
                </h3>
                <p className='lead text-black'>
                  {product.description}
                </p>
                <button className='btn btn-outline-dark px-4 py-2 my-2 me-2' onClick={()=>addProduct(product)}>
                  Adicione ao carrinho
                </button>
                <NavLink to='/cart' className='btn btn-dark px-3 py-2'>
                  Veja o carrinho
                </NavLink>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }

  return( 
    <div>
      <div className='container py-5'>
        <div className='row py-4'>
          {loading ? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  );
}

export default Product;