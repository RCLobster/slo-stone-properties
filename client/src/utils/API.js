export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const getGroups = (token) => {
  return fetch('/api/groups', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createGroup = (groupName) => {
  return fetch('/api/groups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(groupName),
  });
};

export const updateGroup = (groupName, applicant) => {
  return fetch('/api/groups', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    groupName: JSON.stringify(groupName),
    body: JSON.stringify(applicant),
  });
};
