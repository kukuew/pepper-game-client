import React from 'react'
import { Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import { useQuery } from '@apollo/client'
import { LIST_STARSHIPS } from './graphql/queries'
import { Starship } from './types'
import Game from './components/Game'

function App() {
  const { loading, data } = useQuery<{ listStarships: Starship[] }>(LIST_STARSHIPS)

  return (
    <Stack alignItems="center" bgcolor={grey[100]} minHeight="100vh">
      <Typography variant="h3" component="h1" py={5}>
        {loading ? 'Game is loading...' : "Pepper Game!"}
      </Typography>
      {data && <Game starships={data.listStarships} />}
    </Stack>
  )
}

export default App
