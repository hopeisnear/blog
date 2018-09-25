import { USER_LOGGED_IN } from 'events/login-events';
import { LOGIN_PROVIDER_GOOGLE } from 'constants/login-providers';

export function initGooglePlus(store) {
  function makeApiCall() {
    // Make an API call to the People API, and print the user's given name.
    gapi.client.people.people
      .get({
        resourceName: 'people/me',
        'requestMask.includeField': 'person.names,person.photos,person.emailAddresses'
      })
      .then(
        response => {
          store.dispatch({
            type: USER_LOGGED_IN,
            user: { name: response.result.names[0].displayName, email: response.result.emailAddresses[0].value, picture: response.result.photos[0].url },
            loginProvider: LOGIN_PROVIDER_GOOGLE
          });
        },
        reason => {
          console.log(`Error: ${reason.result.error.message}`);
        }
      );
  }

  function updateSigninStatus(isSignedIn) {
    // When signin status changes, this function is called.
    // If the signin status is changed to signedIn, we make an API call.
    if (isSignedIn) {
      makeApiCall();
    }
  }

  function start() {
    gapi.client
      .init({
        apiKey: 'AIzaSyB2Nh_wj8V8Fu_FUl4-qspMZlMG1_J5IWc',
        discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1'],
        clientId: '808040556320-12b791grhcf1eufo5vkk831osv32q8se.apps.googleusercontent.com',
        scope: 'profile'
      })
      .then(() => {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
  }

  function loadClient() {
    gapi.load('client', start);
  }

  (function initSdk(d, s, id) {
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    const js = d.createElement(s);
    js.id = id;
    js.src = 'https://apis.google.com/js/client.js';
    js.onload = () => {
      loadClient();
    };
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'google-api');
}
