import {
  AUTH_SET_TOKEN,
  AUTH_DISCARD_TOKEN,
  AUTH_SET_USER
} from './oauthConstants';

export const authSetToken = (token) => ({
  type: AUTH_SET_TOKEN,
  token
});

export const authDiscardToken = () => ({
  type: AUTH_DISCARD_TOKEN
});

export const authSetUser = (user) => ({
  type: AUTH_SET_USER,
  user
});
