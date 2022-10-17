import { useContext } from 'react'
import { Context } from '../Context'
import useHover from '../hooks/useHover'
import PropTypes from 'prop-types'

function Image({ img, className }) {
    const { toggleFavorite, cartArray, addToCart, deleteFromCart } = useContext(Context)
    const {isHovered, hoverRef} = useHover()

    function favoriteIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-add-fill img-favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (isHovered) {
            return <i className="ri-heart-add-line img-favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        const imgInCart = cartArray.some(item => item.id === img.id)
        if (imgInCart) {
            return <i className="ri-shopping-cart-fill img-cart" onClick={() => deleteFromCart(img.id)}></i>
        }
        else if (isHovered) {
            return <i className="ri-shopping-cart-line img-cart" onClick={() => addToCart(img)}></i>
        }
    }

    return (
        <div
            className={`img-item ${className}`}
            ref={hoverRef}
        >
            {favoriteIcon()}
            {cartIcon()}
            <img className='img' src={img.url} alt=''></img>
        </div>
    )
}

Image.propTypes = {
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    }),
    className: PropTypes.string
}

export default Image