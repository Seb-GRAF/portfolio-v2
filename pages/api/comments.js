import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = `https://api-eu-central-1.graphcms.com/v2/${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}/master`
const graphcmsToken = process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN

const comments = async (req, res) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  })

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `

  try {
    const result = await graphQLClient.request(query, req.body)
    const publish = await graphQLClient.request(
      `mutation publishComment($id: ID!) {
    publishComment(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }`,
      { id: result.createComment.id }
    )

    return res.status(200).send(result)
  } catch (error) {
    return res.status(500).send(error)
  }
}

export default comments
