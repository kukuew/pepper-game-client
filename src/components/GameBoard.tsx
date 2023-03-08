import React, { useEffect } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { Player } from '../types'
import PlayerCard from './PlayerCard'

interface Props {
  player1: Player
  player2: Player
  play: () => void
}

const GameBoard: React.FC<Props> = ({ player1, player2, play }) => {
  useEffect(() => {
    play()
  }, [])

  return (
    <Stack>
      <Stack direction="row" alignItems="center" mb={10}>
        <PlayerCard player={player1} />
        <Typography variant="h3" component="p" mx={5}>
          VS
        </Typography>
        <PlayerCard player={player2} />
      </Stack>
      <Button variant="contained" onClick={play} data-testid="game-play-btn">
        Play!
      </Button>
    </Stack>
  )
}

export default GameBoard