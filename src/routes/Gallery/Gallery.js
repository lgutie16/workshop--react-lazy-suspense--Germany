import React, { useState, useEffect, Suspense } from 'react'
import ErrorBoundary from 'react-error-boundary'
import { unstable_createResource as createResource } from 'react-cache'
import fetchImages from '../../fechImages'


const cache = {}


const LoadImage = createResource((src) => new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", err => reject(err));
    img.src = src;
}))

const RenderImage = ({ src }) => {
    LoadImage.read(src)
    return <img src={src} />
}


const FetchImage = ({ id }) => {
    const image = cache[id]
    if (!image) {
        const promise = fetchImages(id).then(
            image => (cache[image.id] = image),
        )
        throw promise
    }

    return <div>
        {JSON.stringify(image || 'Unknown', null, 2)}

        <ErrorBoundary FallbackComponent={() => 'There was an error...'}>
            <Suspense fallback="loading...">
                <RenderImage src={image.download_url} />
            </Suspense>
        </ErrorBoundary>
    </div>
}

const ImageInfo = ({ id }) => {
    return <ErrorBoundary FallbackComponent={() => 'There was an error...'}>
        <Suspense fallback="loading...">
            <FetchImage id={id} />
        </Suspense>
    </ErrorBoundary>
}

const Gallery = () => {
    const [id, setId] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        setId(e.target.elements.id.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id-input">Id</label>
                <input id="id-input" name="id" />
                <button type="submit">Submit</button>
            </form>
            <div>
                {id && <ImageInfo id={id} />}
            </div>

        </div>
    )

}

export default Gallery