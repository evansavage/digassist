import { Button } from "@material-ui/core"
import { useEffect, useState } from "react"

import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';



export default function GoogleSignin(props) {
  const {clientID, setAccessToken, setRefreshToken} = props;

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
      cookiePolicy={'single_host_origin'}
    />
  )
}
