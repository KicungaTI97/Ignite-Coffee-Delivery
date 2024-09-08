import { createContext, ReactNode, useEffect, useReducer } from "react"
import { useNavigate } from "react-router-dom"

import {
    addItemAction,
    checkoutCartAction,
    decrementItemQuantityAction,
    incrementItemQuantityAction,
    removeItemAction,
  } from '../reducers/cart/actions'
import { cartReducer, Item, Order } from "../reducers/cart/reducers"
import { OrderInfo } from "../Pages/Cart"


interface CartContextType{
    cart: Item[]
    orders: Order[]
    addItem: (item: Item) => void
    removeItem: (itemId: Item['id']) => void
    decrementItemQuantity: (itemId: Item['id']) => void
    incrementItemQuantity: (itemId: Item['id']) => void
    checkout: (order: OrderInfo) => void
}
export const CartContext = createContext({} as CartContextType )

interface CartContextProvideProps{
    children: ReactNode
} 
export function CartContextProvider({children}: CartContextProvideProps){
    const [cartState, dispatch] = useReducer(
        cartReducer,
        {
            cart:[],
            orders: [],
        },
        (cartState) =>{
            const storedStateAsJSON = localStorage.getItem(
                '@coffee-delivery:cart-state-1.0.0',
            )

            if(storedStateAsJSON){
                return JSON.parse(storedStateAsJSON)
            }

            return cartState
        },
    )

    const navigate = useNavigate()

    const {cart, orders} = cartState
    
    function addItem(item: Item){
        dispatch(addItemAction(item))
    }

    function removeItem(ItemId: Item['id']){
        dispatch(removeItemAction(ItemId))
    }

    function checkout(order: OrderInfo){
        dispatch(checkoutCartAction(order, navigate))
    }

    function incrementItemQuantity(itemId: Item['id']){
        dispatch(incrementItemQuantityAction(itemId))
    }

    function decrementItemQuantity(itemId:Item['id']){
        dispatch(decrementItemQuantityAction(itemId))
    }

    useEffect(() => {
        if(cartState){
            const stateJSON = JSON.stringify(cartState)

            localStorage.setItem('@coffe-delivery:cart-state-1.0.0', stateJSON)
        }
    })

    return(
    <CartContext.Provider
      value={{
        addItem,
        cart,
        orders,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItem,
        checkout,
      }}
    >
    {children}
    </CartContext.Provider>
    )
}