import './App.css';
import GoogleSignin from './GoogleSignin.js';
import GoogleSignout from './GoogleSignout.js';
import { useEffect, useState } from "react";
// import { useGoogleApi } from 'react-gapi';


function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken', null));
  const clientID = "588125041912-oo4jcirn1oecot9q9dfm10o0ghal2v5a.apps.googleusercontent.com";

  useEffect(() => {
    if (accessToken) {
      console.log('yuh');

    }
  }, [accessToken])


  return (
    <div className="App">
      <header className="App-header">
        <p>
          DigAssist
        </p>
        <div>{accessToken}</div>
        {accessToken !== null
          ? <GoogleSignout clientID={clientID} accessToken={accessToken} setAccessToken={setAccessToken} />
          : <GoogleSignin clientID={clientID} setAccessToken={setAccessToken} />
        }

      </header>
    </div>
  );
}

export default App;
