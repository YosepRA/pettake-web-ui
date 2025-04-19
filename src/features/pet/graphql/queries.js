import { gql } from '@apollo/client';

const petQueries = {
  GET_PET_LIST: gql`
    query GetPetList($page: Int!, $sort: String!) {
      petList(page: $page, sort: $sort) {
        docs {
          _id
          name
          breed
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
          breed
          images {
            url
          }
        }
        totalDocs
        totalPages
      }
    }
  `,
  GET_USER_PET_DETAILS: gql`
    query GetUserPetDetails($petId: ID!) {
      pet(id: $petId) {
        name
        breed
        age
        gender
        coatLength
        preferHomeWith
        preferHomeWithout
        health
        description
        images {
          publicId
          url
        }
      }
    }
  `,
};

export default petQueries;
