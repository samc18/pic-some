import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

function Header() {
    const { cartArray } = useContext(Context)

    return (
        <header>
            <Link to='main'>
                <h1>Pic Some</h1>
            </Link>

            <Link to='cart'>
                {cartArray.length > 0 ? <i className="ri-shopping-cart-fill header-cart"></i> :
                    <i className="ri-shopping-cart-line header-cart"></i>}
            </Link>
        </header>
    )
}

export default Header