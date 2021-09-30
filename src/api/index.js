import queryString from 'query-string';
import {usersSettings} from '../configs';

export const getUsers = (options = {}) => {
  const defaultOptions = {
    page: usersSettings.DEFAULT_PAGE,
    results: usersSettings.RESULTS,
    seed: usersSettings.API_KEY,
    format: usersSettings.FORMAT,
    inc: usersSettings.DEFAULT_USER_DATA,
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
