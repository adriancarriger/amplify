/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContact = `mutation CreateContact($input: CreateContactInput!) {
  createContact(input: $input) {
    id
    firstName
    lastName
    phones {
      number
      type
    }
  }
}
`;
export const updateContact = `mutation UpdateContact($input: UpdateContactInput!) {
  updateContact(input: $input) {
    id
    firstName
    lastName
    phones {
      number
      type
    }
  }
}
`;
export const deleteContact = `mutation DeleteContact($input: DeleteContactInput!) {
  deleteContact(input: $input) {
    id
    firstName
    lastName
    phones {
      number
      type
    }
  }
}
`;
