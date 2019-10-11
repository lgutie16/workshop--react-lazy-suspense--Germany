import React from 'react'
import './Collage.css'
import images from './collageImages'

const Collage = () => {
    return (
        <div className="collage--Container" data-testid="collage">
            <div className="images--Container">
                {images.map((image) => <img key={image.src} src={require(`./images/${image.src}`)} alt={image.alt} width="300" height="300" />)}
            </div>
        </div>
    )
}

export default Collage