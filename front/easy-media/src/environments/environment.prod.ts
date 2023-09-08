import { host } from './endpoints';

const urlBase = 'https://localhost:3000/';

export const environment = {
  production: true,
  name: 'prod',
  URL_AUTH: `${urlBase}auth/`,
  host,
};
