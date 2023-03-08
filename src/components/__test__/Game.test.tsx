import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Starship } from '../../types'
import Game from '../Game'

const starships: Starship[] = [
  {
    id: '1',
    name: 'Phantom',
    attributes: [
      {
        name: 'crew',
        value: '2'
      }
    ]
  },
  {
    id: '2',
    name: 'Fireball',
    attributes: [
      {
        name: 'crew',
        value: '5'
      }
    ]
  }
]

describe('Game component', () => {
  test('should render Game without enough players', () => {
    render(<Game starships={[]} />)
    const gameTitle = screen.getByTestId('game-title')

    expect(gameTitle).toHaveTextContent('Not enough players :(')
  })
  test('should render Game with correct winner', () => {
    render(<Game starships={starships} />)
    const gameTitle = screen.getByTestId('game-title')
    const playerCardsTitle = screen.getAllByTestId('player-card-title')
    const playerWinnings = screen.getAllByTestId('player-winnings')

    expect(gameTitle).toHaveTextContent('Fireball is winning!')
    playerCardsTitle.forEach((titleEl, index) => {
      if (titleEl.textContent === 'Fireball') {
        expect(playerWinnings[index]).toHaveTextContent('1')
      }
      if (titleEl.textContent === 'Phantom') {
        expect(playerWinnings[index]).toHaveTextContent('0')
      }
    })
  })
  test('should render Game ended in a draw', () => {
    render(<Game starships={[starships[0], starships[0]]} />)
    const gameTitle = screen.getByTestId('game-title')
    const playerWinnings = screen.getAllByTestId('player-winnings')

    expect(gameTitle).toHaveTextContent('The game ended in a draw :)')
    expect(playerWinnings[0]).toHaveTextContent('0')
    expect(playerWinnings[1]).toHaveTextContent('0')
  })
})