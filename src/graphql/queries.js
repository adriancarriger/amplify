/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    email
    first_name
    last_name
    owner
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      email
      first_name
      last_name
      owner
    }
    nextToken
  }
}
`;
export const getContact = `query GetContact($id: ID!) {
  getContact(id: $id) {
    id
    firstName
    lastName
    phones {
      number
      type
    }
    owner
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
      owner
    }
    nextToken
  }
}
`;
export const getTwilioAccount = `query GetTwilioAccount($id: ID!) {
  getTwilioAccount(id: $id) {
    id
    account_sid
    authToken
    owner
  }
}
`;
export const listTwilioAccounts = `query ListTwilioAccounts(
  $filter: ModelTwilioAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listTwilioAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      account_sid
      authToken
      owner
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    account_sid
    api_version
    body
    date_created
    date_sent
    date_updated
    direction
    error_code
    error_message
    from
    messaging_service_sid
    num_media
    num_segments
    price
    price_unit
    sid
    status
    to
    uri
    contacts {
      id
      firstName
      lastName
      phones {
        number
        type
      }
      owner
    }
    owner
  }
}
`;
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      account_sid
      api_version
      body
      date_created
      date_sent
      date_updated
      direction
      error_code
      error_message
      from
      messaging_service_sid
      num_media
      num_segments
      price
      price_unit
      sid
      status
      to
      uri
      contacts {
        id
        firstName
        lastName
        owner
      }
      owner
    }
    nextToken
  }
}
`;
