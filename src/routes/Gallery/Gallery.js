import React, { useState, useEffect, Suspense } from 'react'
//import { unstable_createResource as createResource } from 'react-cache'
import InViewMonitor from 'react-inview-monitor';


/* const ImageResource = createResource(
    source =>
        new Promise(resolve => {
            const img = new Image();
            img.src = source;
            img.onload = resolve;
        })
); */

const Img = ({ src, alt, ...props }) => {
    //ImageResource.read(src);
    //return <img src={src} alt={alt} {...props} width="300" height="300" />
    return <div> {src} </div>
}

const ImageWrapper = ({ image, nr, render }) => {
    return render ? <Suspense fallback="loading">
        <Img src={image.download_url} alt={`img_large_${nr}`} />
    </Suspense> : <div></div>
}

const Gallery = () => {
    const [hasError, setErrors] = useState(false)
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch("https://picsum.photos/v2/list?page=1&limit=10")
            .then(res => res.json())
            .then(res => setImages(res))
            .catch(() => setErrors(true))
    }
    );

    return <div>
        {images.map((image, i) =>
            <InViewMonitor key={i} childPropsInView={{ render: true }}>
                <ImageWrapper image={image} nr={i} />
            </InViewMonitor>
        )}
    </div>
}

export default Gallery