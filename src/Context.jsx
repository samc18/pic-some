import { useState, useEffect, createContext } from 'react'

const Context = createContext()

function ContextProvider(props) {
    const [allImages, setAllImages] = useState([])
    const [cartArray, setCartArray] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(res => res.json())
            .then(data => setAllImages(data))
    }, [])

    function toggleFavorite(id) {
        const updatedImages = allImages.map(img => {
            if (id === img.id) {
                return { ...img, isFavorite: !img.isFavorite }
            }
            return img
        })
        setAllImages(updatedImages)
    }

    function addToCart(img) {
        setCartArray(prev => [...prev, img])
    }

    function deleteFromCart(id) {
        setCartArray(prev => prev.filter(item => item.id !== id))
    }

    return (
        <Context.Provider value={{
            allImages,
            toggleFavorite,
            cartArray,
            setCartArray,
            addToCart,
            deleteFromCart
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }