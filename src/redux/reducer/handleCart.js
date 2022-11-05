const cart = [];

const handleCart =(state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case 'ADDITEM':
      // teste
      // checa se o produto existe no carrinho
      const exist = state.find((x) => x.id === product.id);
      if(exist){
        //se existe, aumente a quantidade
        return state.map((x) => x.id === product.id ? {...x, qty: x.qty +1} : x);
      }else{
        const product = action.payload;
        return[
          ...state,
          {
            ...product,
            qty: 1,
          }
        ]
      }
      break;

      case 'DELITEM':
        //teste
        //checa se tem produtos no carrinho
        const exist1 = state.find((x) => x.id === product.id);
        if(exist1.qty === 1){
          //se existe, diminua a quantidade ou delete
          return state.filter((x) => x.id !== exist1.id);
        }else{
          return state.map((x) => x.id === product.id ? {...x, qty: x.qty-1} : x);
        }
        break;

    default:
      return state;
      break;
  }
}

export default handleCart;