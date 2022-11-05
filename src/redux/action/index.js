// adicionando itens ao carrinho

export const addCart = (product) => {
  return{
    type : 'ADDITEM',
    payload : product
  }
}

// deletando itens do carrinho

export const delCart = (product) => {
  return{
    type : 'DELITEM',
    payload : product
  }
}
