import React, { useState } from 'react' // Import Lazy and Suspense import React, {lazy, Suspense} from 'react'

//Change this to dynamic imports using lazy const Name = lazy(()=> import(''))
import Collage from '../../components/Collage'


const RandomCollage = () => {
    const [showHeavyComponent, setShowHeavyComponent] = useState(false)
    return (
        <div>
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
                Check to Show Collage
            </label>
            {/* Suspense Collage component*/}
            {showHeavyComponent && <Collage />}
        </div>
    )
}

export default RandomCollage