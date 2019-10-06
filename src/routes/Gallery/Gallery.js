import React, { useState, useEffect } from 'react'


const Gallery = () => {
    const [hasError, setErrors] = useState(false)
    const [images, setImages] = useState({})

    useEffect(() => {
        fetch("https://picsum.photos/v2/list")
            .then(res => res.json())
            .then(res => setImages(res))
            .catch(() => setErrors(true))
    }
    );

    return <div>{JSON.stringify(images)}</div>
}

export default Gallery