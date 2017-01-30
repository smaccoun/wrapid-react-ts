import gql from 'graphql-tag'
import gqlSDK from "../../connect/graphcoolConnect";


const allBaseProfiles = gql`query allProfiles {
  allBaseProfiles{
    id
    firstName
  }
}`

export const fetchProfile = (extraId: string, options?: any): Promise<any> => {
  return gqlSDK.query({query: allBaseProfiles, variables: {extraId}})
}







