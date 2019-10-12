/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    email
    first_name
    last_name
    owner
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    email
    first_name
    last_name
    owner
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    email
    first_name
    last_name
    owner
  }
}
`;
export const createContact = `mutation CreateContact($input: CreateContactInput!) {
  createContact(input: $input) {
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
export const updateContact = `mutation UpdateContact($input: UpdateContactInput!) {
  updateContact(input: $input) {
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
export const deleteContact = `mutation DeleteContact($input: DeleteContactInput!) {
  deleteContact(input: $input) {
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
export const createTwilioAccount = `mutation CreateTwilioAccount($input: CreateTwilioAccountInput!) {
  createTwilioAccount(input: $input) {
    id
    account_sid
    authToken
    owner
  }
}
`;
export const updateTwilioAccount = `mutation UpdateTwilioAccount($input: UpdateTwilioAccountInput!) {
  updateTwilioAccount(input: $input) {
    id
    account_sid
    authToken
    owner
  }
}
`;
export const deleteTwilioAccount = `mutation DeleteTwilioAccount($input: DeleteTwilioAccountInput!) {
  deleteTwilioAccount(input: $input) {
    id
    account_sid
    authToken
    owner
  }
}
`;
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
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
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
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
