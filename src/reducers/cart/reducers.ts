import {produce } from 'immer'
import { ActionTypes, Actions } from './actions'
import { OrderInfo } from '../../Pages/Cart'

export interface Item{
    id: string
    quantity: number
}

export interface Order extends OrderInfo{
    id: number
    items: Order[]
}

interface CartState{
    cart: Item[]
    orders: Order[]
}

export function cartReducer(state: CartState, action: Actions)
{
    switch(action.type){
        case ActionTypes.ADD_ITEM:
            return produce(state, (draft) => {
                const itemAlreadAdded = draft.cart.find(
                    (item) => item.id === action.payload.item.id,
            )

            if(itemAlreadAdded){
                itemAlreadAdded.quantity += action.payload.item.quantity
            } else{
                draft.cart.push(action.payload.item)
            }
    })

        case ActionTypes.INCREMENT_ITEM_QUANTITY: 
            return produce(state, (draft) => {
                const itemToIncrement = draft.cart.find(
            (item) => item.id === action.payload.itemId,
            )
       
        if(itemToIncrement?.id){
            itemToIncrement.quantity += 1
        }
        })

        case ActionTypes.DECREMENT_ITEM_QUANTITY: 
            return produce(state, (draft) => {
                const itemToIncrement = draft.cart.find(
                    (item) => item.id === action.payload.itemId,)
       
        if(itemToIncrement?.id && itemToIncrement.quantity > 1){
            itemToIncrement.quantity -= 1
        }
        })

        case ActionTypes.CHECKOUT_CART:
            return produce(state, (draft) => {
                const newOrder = {
                    id: new Date().getTime(),
                    items: state.cart,
                    ...action.payload.order,
                }
                draft.orders.push(newOrder)
                draft.cart = []

                action.payload.callback(`/order/${newOrder.id}/sucess`)
            })

            default:
                 return state 

    }
}