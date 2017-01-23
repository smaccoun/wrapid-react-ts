import ApolloClient, { createNetworkInterface } from 'apollo-client'

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciy518rhw048c0179d5o7tkmd' })

// The x-graphcool-source header is to let the server know that the example app has started.
// (Not necessary for normal projects)
networkInterface.use([{
  applyMiddleware (req: any, next: any) {
    if (!req.options.headers) {
      // Create the header object if needed.
      req.options.headers = {}
    }
    req.options.headers['x-graphcool-source'] = 'example:react-apollo-instagram'
    next()
  },
}])


const gqlSDK = new ApolloClient({ networkInterface })

export default gqlSDK;
