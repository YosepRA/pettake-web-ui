import { gql } from '@apollo/client';

const petQueries = {
  GET_PET_LIST: gql`
    query GetPetList($page: Int!, $sort: String!) {
      petList(page: $page, sort: $sort) {
        docs {
          _id
          name
          description
          images {
            url
          }
        }
        totalDocs
        totalPages
      }
    }
  `,
  GET_PET_DETAILS: gql`
    query GetPetDetails($petId: ID!) {
      pet(id: $petId) {
        images {
          url
        }
        name
        description
        breed
        age
        gender
        coatLength
        preferHomeWith
        preferHomeWithout
        health
        author {
          name
          phone
          address
        }
      }
    }
  `,
  GET_USER_PET_LIST: gql`
    query GetUserPetList($page: Int!, $sort: String!) {
      userPetList(page: $page, sort: $sort) {
        docs {
          _id
          name
          description
          images {
            url
          }
        }
        totalDocs
        totalPages
      }
    }
  `,
};

export default petQueries;
