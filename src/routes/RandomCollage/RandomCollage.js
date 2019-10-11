import React, { useState, lazy, Suspense } from 'react'

const Collage = lazy(() => import('../../components/Collage'))

const RandomCollage = () => {
    const [showHeavyComponent, setShowHeavyComponent] = useState(false)
    return <div>
        <h1> Collage </h1>
        <label htmlFor="toggle">
            <input
                type="checkbox"
                id="toggle"
                checked={showHeavyComponent}
                onChange={
                    event => setShowHeavyComponent(event.target.checked)
                }
            />
            Check Show Collage
        </label>
        <Suspense fallback="loading" >
            {showHeavyComponent && <Collage />}
        </Suspense>
    </div>
}

export default RandomCollage