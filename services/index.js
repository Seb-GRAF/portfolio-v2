import { gql, GraphQLClient } from 'graphql-request'

const graphqlAPI = `https://api-eu-central-1.graphcms.com/v2/${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}/master`
const graphcms = new GraphQLClient(graphqlAPI)

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await graphcms.request(query)

  return result.postsConnection.edges
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          markdown
        }
      }
    }
  `

  const result = await graphcms.request(query, { slug })

  return result.post
}

export const getRecentPosts = async () => {
  const query = gql`
  query GetPostDetails(){
    posts(orderBy: createdAt_DESC, first: 2){
      title
      excerpt
      categories {
              name
              slug
           }
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
  `

  const result = await graphcms.request(query)

  return result.posts
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
        orderBy: createdAt_DESC
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await graphcms.request(query, { categories, slug })

  return result.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `

  const result = await graphcms.request(query)

  return result.categories
}

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return result.json()
}

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `

  const result = await graphcms.request(query, { slug })

  return result.comments
}

export const getProjects = async () => {
  const query = gql`
    query getProjects {
      projects(orderBy: publishedAt_ASC) {
        title
        description {
          markdown
        }
        techStack
        projectPicture {
          url
        }
        github
        website
        featured
      }
    }
  `

  const result = await graphcms.request(query)

  return result.projects
}
