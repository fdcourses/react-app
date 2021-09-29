import queryString from 'query-string';

export const getUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    results: 10,
    seed: 'fd2021-1',
    format: 'json',
    inc: ['name', 'login', 'nat'],
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const query = queryString.stringify(finalOptions, { arrayFormat: 'comma' });

  return fetch(`https://randomuser.me/api/?${query}`).then((response) =>
    response.json()
  );
};
