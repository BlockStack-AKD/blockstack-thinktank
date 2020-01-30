import React, { useEffect } from 'react';
import Landing from './Landing';
import SignedIn from './SignedIn';

import { UserSession } from 'blockstack';
import { appConfig } from '../config/constants';

const userSession = new UserSession({appConfig});

const  App = props => {

  useEffect(() => {
    if(!userSession.isUserSignedIn() && userSession.isSignInPending()) {
      userSession.handlePendingSignIn()
        .then((userData) => {
          if(!userData.username) {
            throw new Error("This app requires a username to be set")
          }
          window.location = window.location.origin;
        })
    }
  })

  return (
    <div className="App" data-testid="appTestID">
      {!userSession.isUserSignedIn() ? <Landing/> : <SignedIn/>}
    </div>
  );
}


export default App;
