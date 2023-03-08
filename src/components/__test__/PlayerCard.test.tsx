import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Player } from '../../types'
import PlayerCard from '../PlayerCard'

const player: Player = {
  id: '1',
  name: 'Phantom',
  attributes: [
    {
      name: 'crew',
      value: '2'
    }
  ],
  wins: 0
}

describe('PlayerCard component', () => {
  test('', () => {
    render(<PlayerCard player={player} />)
    const playerCard = screen.getByTestId('player-card')
    const playerWinnings = screen.getByTestId('player-winnings')

    expect(playerCard).toHaveTextContent(player.name)
    expect(playerWinnings).toHaveTextContent(`${player.wins}`)
  })
})