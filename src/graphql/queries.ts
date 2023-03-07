import { gql } from '@apollo/client'

export const LIST_STARSHIPS = gql`
  query {
    listStarships {
      attributes {
        name
        value
      }
      id
      name
    }
  }
`
