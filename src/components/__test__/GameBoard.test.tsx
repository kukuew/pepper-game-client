import { jest } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Player } from '../../types'
import GameBoard from '../GameBoard'

const players: Player[] = [
  {
    id: '1',
    name: 'Phantom',
    attributes: [
      {
        name: 'crew',
        value: '2'
      }
    ],
    wins: 0
  },
  {
    id: '2',
    name: 'Fireball',
    attributes: [
      {
        name: 'crew',
        value: '5'
      }
    ],
    wins: 0
  }
]

describe('GameBoard component', () => {
  test('should run play fn', () => {
    const playMock = jest.fn()
    render(<GameBoard player1={players[0]} player2={players[1]} play={playMock} />)

    const gamePlayBtn = screen.getByTestId('game-play-btn')

    expect(playMock).toBeCalledTimes(1)
    fireEvent.click(gamePlayBtn)
    expect(playMock).toBeCalledTimes(2)
  })
})
