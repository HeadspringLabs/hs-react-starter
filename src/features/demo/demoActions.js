import fetch from 'isomorphic-fetch';

// create your firebase database https://console.firebase.google.com/ for testing:
const restUrl = 'https://crud-test-cfd2b.firebaseio.com/teams.json';

const saveTeam = info => () => {
  console.log('Starting saving team information...', info); // eslint-disable-line
  return fetch(restUrl, {
    method: 'POST',
    body: JSON.stringify(info)
  })
  .then(response => response.json())
  .then(data => {
    // TODO: Do something cool after form submits
    console.log(data); // eslint-disable-line
    alert('Submitted!');
  });
};

export const handleSave = data => dispatch => new Promise((resolve, reject) => {
  if (!data.someField || !data.anotherField) {
    reject({ someField: 'This field is required', _error: 'Ups! Looks like you there is missing information above.' });
  } else {
    dispatch(saveTeam(data));
    resolve();
  }
});
