import { useState, useContext } from 'react'
import { Context } from '../Context'

import CartItem from "../components/CartItem"

function Cart() {
    const { cartArray, setCartArray } = useContext(Context)
    const [isOrderPlaced, setIsOrderPlaced] = useState(false)
    const totalCost = 5.99 * cartArray.length
    const totalCostDisplay = totalCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

    const displayCartItems = cartArray.map(image => {
        return (
            <CartItem key={image.id} img={image} />
        )
    })

    function placeOrder() {
        setIsOrderPlaced(prev => !prev)
        setTimeout(() => {
            setCartArray([])
            console.log('Order placed!')    
        }, 2000)
    }

    return (
        <div className='cart-container'>
            <h1 className='cart-title'>Check out</h1>
            {displayCartItems}
            {cartArray.length > 0 && <p className='cart-total'>Total: {totalCostDisplay}</p>}
            {cartArray.length === 0 && <p className='cart-message'>You have no items in your cart</p>}
            {cartArray.length > 0 && <button className='cart-btn' onClick={placeOrder}>{isOrderPlaced ? 'Ordering..' : 'Place order'}</button>}
        </div>
        
    )
}

export default Cart