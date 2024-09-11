export const CART_ADD_ITEM='card/addItem';
export const CART_REMOVE_ITEM = 'cart/removeItem'
export const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
export const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'

export default function cartitemsReducer(state=[],action){

    switch(action.type){
        case CART_ADD_ITEM:
            return [...state,action.payload]
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