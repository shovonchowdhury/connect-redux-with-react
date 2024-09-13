export const CART_ADD_ITEM='card/addItem';
export const CART_REMOVE_ITEM = 'cart/removeItem'
export const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
export const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'


// Action Creators
export function addCartItem(productInfo) {
    console.log('peyechi')
    return { type: CART_ADD_ITEM, payload: productInfo }
  }
  
  export function removeCartItem(productId) {
    return { type: CART_ADD_ITEM, payload: { productId } }
  }
  
  export function decreaseCartItemQuantity(productId) {
    return {
      type: CART_ITEM_DECREASE_QUANTITY,
      payload: { productId },
    }
  }
  
  export function increaseCartItemQuantity(productId) {
    return {
      type: CART_ITEM_INCREASE_QUANTITY,
      payload: { productId },
    }
  }

export default function cartitemsReducer(state=[],action){

  console.log('reducer peyeche',action)
    switch(action.type){
        case CART_ADD_ITEM:
            const existedItem= state.find((cartItem)=> cartItem.productId===action.payload.productId);
            if(existedItem)
            {
              return state.map(item=>{
                if(item.productId===action.payload.productId)
                    return {...item, quantity : item.quantity+1}
                else 
                    return item;
              })
            }
            return [...state,{...action.payload, quantity:1}]
        case CART_REMOVE_ITEM:
            return state.filter(item=>{ 
                return item.productId !== action.payload.productId
            })
        case CART_ITEM_INCREASE_QUANTITY:
            return state.map(item=>{
                if(item.productId===action.payload.productId)
                    return {...item, quantity : item.quantity+1}
                else 
                    return item;
            })
        case CART_ITEM_DECREASE_QUANTITY:
            return state.map(item=>{
                if(item.productId===action.payload.productId)
                    return {...item, quantity: item.quantity-1}

                return item;
            }).filter(item=> item.quantity>0)
        default:
            return state;
    }

}