import { Player } from '../types'

export const getWinner = (player1: Player, player2: Player): Player | null => {
  const commonAttributeIndex = player1.attributes.findIndex(
    attr1 => player2.attributes.findIndex(attr2 => attr1.name === attr2.name) !== -1
  )
  const player1Value = Number(player1.attributes[commonAttributeIndex].value)
  const player2Value = Number(player2.attributes[commonAttributeIndex].value)

  if (player1Value === player2Value) return null

  return player1Value > player2Value ? player1 : player2
}