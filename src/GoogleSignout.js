
import React from 'react';
import { GoogleLogout } from 'react-google-login';



export default function GoogleSignout(props) {
  const {setAccessToken} = props;

  const logout = (response) => {
    console.log(response);
    setAccessToken(null);
    localStorage.setItem('accessToken', null);
  }

  return (
    <GoogleLogout
      clientId={props.clientID}
      buttonText="Logout"
      onLogoutSuccess={logout}
    />
  )
}
