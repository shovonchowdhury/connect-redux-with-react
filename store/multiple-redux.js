import { combineReducers, createStore } from 'redux'
import { productsList } from './productsList'
import cartitemsReducer, { CART_ADD_ITEM, CART_ITEM_DECREASE_QUANTITY, CART_ITEM_INCREASE_QUANTITY, CART_REMOVE_ITEM } from './cartItemsReducer'
import wishListReducer, { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from './wishListReducer'
import productListReducer from './productListReducer'


const reducer= combineReducers({
    products: productListReducer,
    cartItems: cartitemsReducer,
    wishList: wishListReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({type: CART_ADD_ITEM, payload:{productId:1, quantity:1}});
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 12, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 11, quantity: 3 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 4, quantity: 1 } });


store.dispatch({type:CART_REMOVE_ITEM,payload:{productId:4}});

store.dispatch({
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId: 12 },
  })

store.dispatch({
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId: 11 },
  })
store.dispatch({
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId: 1 },
  })

store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 18 } })
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 11 } })
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 12 } })
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 11 } })
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 18 } })

