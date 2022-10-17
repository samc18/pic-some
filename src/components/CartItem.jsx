import { useContext } from 'react'
import { Context } from '../Context'
import useHover from '../hooks/useHover'
import PropTypes from 'prop-types'

function CartItem({ img }) {
    const { deleteFromCart } = useContext(Context)
    const {isHovered, hoverRef} = useHover()

    const deleteIconClass = isHovered ? 'ri-delete-bin-7-fill' : 'ri-delete-bin-7-line'

    return (
        <div className='cart-item'>
            <i
                className={`cart-delete ${deleteIconClass}`}
                onClick={() => deleteFromCart(img.id)}
                ref={hoverRef}
            ></i>
            <img className='cart-img' src={img.url} alt=''></img>
            <span className='cart-price'>$5.99</span>
        </div>
    )
}

CartItem.propTypes = {
    img: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem