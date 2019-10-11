import React, { lazy, Suspense } from 'react'
import { render, waitForElement, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import RandomCollage from '../routes/RandomCollage'
import Collage from '../components/Collage'

//Test that Collage component displays when the checkbox is checked
//Assert Collage component (lazy loaded one) should display an element with id collage when loaded (when loaded)

test('Displays Collage when Clicked', async () => {
    const { container, getByText, getByTestId } = render(<RandomCollage />)

    fireEvent.click(getByText(/show/i))

    const lazyCollage = await waitForElement(() => getByTestId('collage'))

    expect(lazyCollage).toBeInTheDocument()
})