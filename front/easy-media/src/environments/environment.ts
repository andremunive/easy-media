// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
import { host } from './endpoints';

const urlBase = 'http://localhost:3000/';

export const environment = {
  production: false,
  name: 'dev',
  URL_AUTH: `${urlBase}auth/`,
  host,
};
