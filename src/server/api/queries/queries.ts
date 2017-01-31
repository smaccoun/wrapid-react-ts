import gql from 'graphql-tag'
import gqlSDK from "../../connect/graphcoolConnect";


const fetchProfileGQL = gql`query fetchProfile($extraId:ID) {
  User(id: $extraId){
    id
    baseprofile{
      id
      firstName
    }
  }
}`

export const fetchProfile = (extraId: string, options?: any): Promise<any> => {
  return gqlSDK.query({query: fetchProfileGQL, variables: {extraId}})
}








