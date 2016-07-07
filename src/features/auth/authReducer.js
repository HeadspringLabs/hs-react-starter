var {
  AUTH_SET_TOKEN,
  AUTH_DISCARD_TOKEN,
  AUTH_SET_USER
} = require('./oauthConstants');

const oauthReducer = (state = {}, {type, token}) => {
  switch(type){

    // saves the token into the state
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: token
      };

    // discards the current token (logout)
    case AUTH_DISCARD_TOKEN:
      return {};

    // saves the current user
    case AUTH_SET_USER:
      return {
        ...state,
        user
      };

    default:
      return state;
  }
};

export default oauthReducer;
