

export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    dataType: 'JSON',
    data: { user }
  })
);

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    dataType: 'JSON',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
    dataType: 'JSON'
  })
);
