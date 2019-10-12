/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($owner: String) {
  onCreateUser(owner: $owner) {
    email
    first_name
    last_name
    owner
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser($owner: String) {
  onUpdateUser(owner: $owner) {
    email
    first_name
    last_name
    owner
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser($owner: String) {
  onDeleteUser(owner: $owner) {
    email
    first_name
    last_name
    owner
  }
}
`;
export const onCreateContact = `subscription OnCreateContact($owner: String) {
  onCreateContact(owner: $owner) {
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
export const onUpdateContact = `subscription OnUpdateContact($owner: String) {
  onUpdateContact(owner: $owner) {
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
export const onDeleteContact = `subscription OnDeleteContact($owner: String) {
  onDeleteContact(owner: $owner) {
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
export const onCreateTwilioAccount = `subscription OnCreateTwilioAccount($owner: String) {
  onCreateTwilioAccount(owner: $owner) {
    id
    account_sid
    authToken
    owner
  }
}
`;
export const onUpdateTwilioAccount = `subscription OnUpdateTwilioAccount($owner: String) {
  onUpdateTwilioAccount(owner: $owner) {
    id
    account_sid
    authToken
    owner
  }
}
`;
export const onDeleteTwilioAccount = `subscription OnDeleteTwilioAccount($owner: String) {
  onDeleteTwilioAccount(owner: $owner) {
    id
    account_sid
    authToken
    owner
  }
}
`;
export const onCreateMessage = `subscription OnCreateMessage($owner: String) {
  onCreateMessage(owner: $owner) {
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
export const onUpdateMessage = `subscription OnUpdateMessage($owner: String) {
  onUpdateMessage(owner: $owner) {
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
export const onDeleteMessage = `subscription OnDeleteMessage($owner: String) {
  onDeleteMessage(owner: $owner) {
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
