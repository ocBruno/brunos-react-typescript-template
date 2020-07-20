import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders home link in navbar', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Home/i)
  expect(linkElement).toBeInTheDocument()
})
