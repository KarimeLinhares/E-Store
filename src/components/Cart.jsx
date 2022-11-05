import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';

const Cart = () => {

  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()

  const handleAdd = (item) => {
    dispatch(addCart(item))
  }
  const handleDel = (item) => {
    dispatch(delCart(item))
  }

  const emptyCart = () => {
    return(
      <div className='px-4 my-5 bg-light rounded-3 py-5'>
        <div className='container py-4'>
          <div className='d-flex justify-content-center'>
            <h3>Carrinho Vazio</h3>
          </div>
          <div className='lead d-flex justify-content-center'>
            <i className='fa fa-frown-o'></i>
          </div>
        </div>
      </div>
    )
  }

  const cartItems = (product) => {
    return(
      <>
        <div className='px-4 my-5 bg-light rounded-3 py-5'>
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-4'>
                <img src={product.image} alt={product.title} height='200px' width={180} />
              </div>
              <div className='col-md-4'>
                <h3>{product.title}</h3>
                <p className='lead m-0'>
                  Valor Único = ${product.price}
                </p>
                <p className='lead mb-3'>
                  Quantidade {product.qty}
                </p>
                <button className='btn btn-outline-dark me-4' onClick={()=>handleDel(product)}>
                  <i className='fa fa-minus'></i>
                </button>
                <button className='btn btn-outline-dark' onClick={()=>handleAdd(product)}>
                  <i className='fa fa-plus'></i>
                </button>
                <p className='lead fw-bold mt-3'>
                  Total: ${product.qty * product.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  const buttons = () => {
    return(
      <>
        <div className='container'>
          <div className='row'>
            <NavLink to='/checkout' className='btn btn-outline-dark mb-5 w-25 mx-auto'>
              Proceder para o Pagamento
            </NavLink>
          </div>
        </div>
      </>
    )
  }

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  )
}

export default Cart;
