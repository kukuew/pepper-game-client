import React from 'react'
import { Card, Divider, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import { Player } from '../types'

interface Props {
  player: Player
}

const PlayerCard: React.FC<Props> = ({ player }) => {
  return (
    <Card data-testid="player-card">
      <Stack p={2} width={200}>
        <Typography textAlign="center" variant="h5" component="p" mb={3} data-testid="player-card-title">
          {player.name}
        </Typography>
        <Stack>
          <Divider>
            <Typography>Attributes</Typography>
          </Divider>
          <List>
            {player.attributes.map(attribute => (
              <ListItem key={attribute.value}>
                <ListItemText>
                  <Typography textAlign="center">
                    {attribute.name}: {attribute.value}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Stack>
        <Stack>
          <Divider>
            <Typography>Winnings</Typography>
          </Divider>
          <Typography textAlign="center" data-testid="player-winnings">{player.wins}</Typography>
        </Stack>
      </Stack>
    </Card>
  )
}

export default PlayerCard
