import React, { useState, lazy, Suspense } from 'react'

const Collage = lazy(() => import('../../components/Collage'))

const RandomCollage = () => {
    const [showHeavyComponent, setShowHeavyComponent] = useState(false)
    return <div className="App">
        <h1>Random Collage</h1>
        <input
            type="checkbox"
            value={showHeavyComponent}
            onChange={
                event => setShowHeavyComponent(event.target.checked)
            }
        />
        <Suspense fallback="loading" >
            {showHeavyComponent && <Collage />}
        </Suspense>
    </div>
}

export default RandomCollage