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
      <div className='px-4 my-5 rounded-3 py-5'>
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
          <div className='container py-2'>
            <div className='row justify-content-center bg-light rounded-3 py-4'>
              <div className='col-md-3 bg-light p-5 rounded'>
                <img src={product.image} alt={product.title} height='200px' width={180} />
              </div>
              <div className='col-md-4 text-black'>
                <h3>{product.title}</h3>
                <p className='lead m-0 text-black'>
                  Valor Único = ${product.price}
                </p>
                <p className='lead mb-3 text-black'>
                  Quantidade {product.qty}
                </p>
                <button className='btn btn-secondary me-4' onClick={()=>handleDel(product)}>
                  <i className='fa fa-minus'></i>
                </button>
                <button className='btn btn-secondary me-4' onClick={()=>handleAdd(product)}>
                  <i className='fa fa-plus'></i>
                </button>
                <p className='lead fw-bold mt-3 text-black'>
                  Total: ${product.qty * product.price}
                </p>
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
            <NavLink to='/cart' className='btn btn-secondary mb-5 w-25 mx-auto'>
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
