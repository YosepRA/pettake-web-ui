import { gql } from '@apollo/client';

const petMutations = {
  CREATE_NEW_PET: gql`
    mutation CreateNewPet($pet: PetInput!) {
      petCreate(pet: $pet) {
        name
      }
    }
  `,
  EDIT_PET: gql`
    mutation EditPet($petId: ID!, $petUpdates: PetUpdateInput!) {
      petUpdate(id: $petId, petUpdates: $petUpdates) {
        name
      }
    }
  `,
};

export default petMutations;
