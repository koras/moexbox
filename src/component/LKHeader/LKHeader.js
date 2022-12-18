 
// import {
  import React, { useState, useEffect } from 'react';
//   Link
// } from "react-router-dom";
import { GoogleLogin,GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

import Button from "@mui/material/Button";

import './style.css';
  

// {"web":{"client_id":"854331110586-ams6lqojo4dc3buer6ia5ov7jtjo92ca.apps.googleusercontent.com",
// "project_id":"moexbox","auth_uri":"https://accounts.google.com/o/oauth2/auth",
// "token_uri":"https://oauth2.googleapis.com/token",
// "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
// "client_secret":"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"}}


const clientId = '854331110586-ams6lqojo4dc3buer6ia5ov7jtjo92ca.apps.googleusercontent.com';
var SCOPES = "https://accounts.google.com/o/oauth2/auth";
 // https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token
export const LKHeader =() => {

  const [ profile, setProfile ] = useState([]);
  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
       //   scope: SCOPES
        });
     };
     gapi.load('client:auth2', initClient);
 });

   const onSuccess = (res) => {
    console.log('onSuccess', res);
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
      setProfile(null);
  };
  const customStyle = {
        width:100,
        height:50,
        margin:'20px',
        boxShadow:'0px'
  };

     

const  GetProfile =()=> {
  if(profile && profile.name){
    console.log('user image',profile);
    return  <div>
            <img src={profile.imageUrl} alt="user image" />
            {/* <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p> */}
      
            <GoogleLogout clientId={clientId} 
                render={renderProps => (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={customStyle}
                    onClick={renderProps.onClick}
                  >
                    
                </Button>
                
                )}
            className={customStyle}
            buttonText="Выйти" 
           
            onLogoutSuccess={logOut} />
        </div>
    } else {
      return <div><GoogleLogin
              render={renderProps => (
                <Button
                size="small"  
                 variant="outlined"
                  type="submit"
                  fullWidth
           
                  color="primary"
                  className={customStyle}
                  onClick={renderProps.onClick}
                >
                  Авторизироваться
              </Button>
              )}
            clientId={clientId}
            buttonText="Войти "
            className={customStyle}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        /></div>
    }
}

return (
  <div className="header-box-lk"> 
  <div className="header-box-lk__light">  
      <div className="header-box-lk__input"> {<GetProfile/>}</div>
  </div> 
 </div> 
 
)

 
  return ( 
    <div className="header-box-lk"> 
      <div className="header-box-lk__light">  
          <div className="header-box-lk__input">Личный кабинет</div>
      </div> 
     </div> 
  );
}

export default LKHeader;
