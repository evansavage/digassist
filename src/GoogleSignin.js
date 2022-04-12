import React from 'react';
import GoogleLogin from 'react-google-login';

export default function GoogleSignin(props) {
  const {clientID, accessToken, setAccessToken} = props;

  const responseGoogle = (response) => {
    if (response.type !== 'tokenFailed') {
      console.log(response);
      setAccessToken(response.accessToken);
      localStorage.setItem('accessToken', response.accessToken);
    } else {
      console.log('Login failed, try again');
    }


  }

  return (
    <GoogleLogin
      clientId={clientID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      isSignedIn={accessToken !== null ? true : false}
      cookiePolicy={'single_host_origin'}
    />
  )
}
