export type Starship = {
  id: string
  name: string
  attributes: Attribute[]
}

export type Player = Starship & {
  wins: number
}

export type Attribute = {
  name: string
  value: string
}
