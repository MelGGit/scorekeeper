import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Player', () => {
  it('returns a button with a name', async () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Test</Button>)

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(handleClick).toBeCalled()
    expect(screen.getAllByRole('button').length).toBe(1)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
