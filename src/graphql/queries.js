/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContact = `query GetContact($id: ID!) {
  getContact(id: $id) {
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
export const listContacts = `query ListContacts(
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      phones {
        number
        type
      }
    }
    nextToken
  }
}
`;
