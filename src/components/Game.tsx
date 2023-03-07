import React, { useEffect, useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { shuffleArray } from '../lib/shuffleArray'
import { getWinner } from '../lib/getWinner'
import { Player, Starship } from '../types'
import PlayerCard from './PlayerCard'

interface Props {
  starships: Starship[]
}

const initializePlayers = (starships: Starship[]): Player[] => {
  return starships.map(starship => ({ ...starship, wins: 0 }))
}

const Game: React.FC<Props> = ({ starships }) => {
  const [players, setPlayers] = useState<Player[]>(() => initializePlayers(starships))
  const [winner, setWinner] = useState<Player | null>(null)

  const play = () => {
    const shuffledPlayers = shuffleArray([...players])
    const winner = getWinner(shuffledPlayers[0], shuffledPlayers[1])

    setPlayers(shuffledPlayers)
    setWinner(winner)
  }

  useEffect(() => {
    play()
  }, [])

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
      <Typography variant="h4" component="h2" mb={10}>
        {winner ? `${winner.name} is winning!` : 'The game ended in a draw :)'}
      </Typography>
      <Stack direction="row" alignItems="center" mb={10}>
        <PlayerCard player={players[0]} />
        <Typography variant="h3" component="p" mx={5}>VS</Typography>
        <PlayerCard player={players[1]} />
      </Stack>
      <Button variant="contained" onClick={play}>
        Play!
      </Button>
    </Stack>
  )
}

export default Game
