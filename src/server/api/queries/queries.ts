import gql from 'graphql-tag'

const allBaseProfiles = gql`query a {
  allBaseProfiles {
    id
    firstName
    lastName
  }
}`

const gqlGetExtra = gql`query getExtra($emailId: String) {
  ExtraUser(emailId: $emailId){
    id
  }
}`

export {
  allBaseProfiles,
  gqlGetExtra
}
