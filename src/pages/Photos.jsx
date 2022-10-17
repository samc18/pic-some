import { useContext } from 'react'
import { getClass } from '../utils/getClass'
import Image from '../components/Image'
import { Context } from '../Context'

function Main() {
    const { allImages } = useContext(Context)

    const imgsDisplayed = allImages.map((image, i) => {
        return (
            <Image key={image.id} img={image} className={getClass(i)} />
        )
    })

    return (
        <main className='img-container'>
            {imgsDisplayed}
        </main>
    )

}

export default Main