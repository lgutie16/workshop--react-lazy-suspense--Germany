import React, { useState, Suspense } from 'react'
import ErrorBoundary from 'react-error-boundary'
import { unstable_createResource as createResource } from 'react-cache'  //Cache 
import fetchImages from '../../fechImages'


// What should be wrapped with suspense?
// Which blocks in this file are returning promises?
// Suspense blocks of code you think you should suspense

const cache = {} //Cache

const LoadImage = createResource((src) => new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", err => reject(err));
    img.src = src;
}))

const RenderImage = ({ src }) => {
    LoadImage.read(src)
    return (
        <img src={src} alt="" className="Gallery-image" />)
}

const FetchImage = ({ id }) => {
    const image = cache[id]
    if (!image) {
        const promise = fetchImages(id).then(
            image => (cache[image.id] = image),
        )
        throw promise
    }

    return (
        <div>
            <pre className="Gallery-json"> {JSON.stringify(image || 'Unknown', null, 2)}</pre>
            <ErrorBoundary FallbackComponent={() => 'There was an error...'}>
                <RenderImage src={image.download_url} />
            </ErrorBoundary>
        </div>
    )
}

const ImageInfo = ({ id }) => {
    return (
        <ErrorBoundary FallbackComponent={() => 'There was an error...'}>
            <FetchImage id={id} />
        </ErrorBoundary>
    )
}

const Gallery = () => {
    const [id, setId] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        setId(e.target.elements.id.value)
    }

    return (
        <div>
            <h1> Gallery </h1>
            <legend />
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="id-input">Image Id: </label>
                    <input id="id-input" name="id" />
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
            {/* <div>
                {id && <ImageInfo id={id} />}
            </div> */}
        </div>
    )

}

export default Gallery