import React, { useEffect, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import { shuffleArray } from '../lib/shuffleArray'
import { getWinner } from '../lib/getWinner'
import { Player, Starship } from '../types'
import GameBoard from './GameBoard'

interface Props {
  starships: Starship[]
}

const initializePlayers = (starships: Starship[]): Player[] => {
  return starships.map(starship => ({ ...starship, wins: 0 }))
}

const Game: React.FC<Props> = ({ starships }) => {
  const [players, setPlayers] = useState<Player[]>(() => initializePlayers(starships))
  const [winner, setWinner] = useState<Player | null>(null)
  const areEnoughPlayers = players.length > 1

  const play = () => {
    if (!areEnoughPlayers) return

    const shuffledPlayers = shuffleArray([...players])
    const winner = getWinner(shuffledPlayers[0], shuffledPlayers[1])

    setPlayers(shuffledPlayers)
    setWinner(winner)
  }

  useEffect(() => {
    if (!winner) return

    setPlayers(prevPlayers => {
      const newPlayers = [...prevPlayers]
      const winnerIndex = newPlayers.findIndex(player => player.id === winner.id)

      newPlayers[winnerIndex] = {
        ...winner,
        wins: winner.wins + 1
      }

      return newPlayers
    })
  }, [winner])

  return (
    <Stack alignItems="center" p={5}>
      <Typography variant="h4" component="h2" mb={10} data-testid="game-title">
        {!areEnoughPlayers && 'Not enough players :('}
        {areEnoughPlayers && (winner ? `${winner.name} is winning!` : 'The game ended in a draw :)')}
      </Typography>
      {areEnoughPlayers && <GameBoard player1={players[0]} player2={players[1]} play={play} />}
    </Stack>
  )
}

export default Game
