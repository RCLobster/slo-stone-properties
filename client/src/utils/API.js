export const getGroups = (token) => {
  return fetch('/api/groups', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const createGroup = (groupName) => {
  return fetch('/api/groups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(groupName),
  });
};

export const updateGroup = (groupName) => {
  return fetch('/api/groups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(groupName),
  });
};
