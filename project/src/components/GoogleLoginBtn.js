import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';
import GOOGLE_CLIENT_ID from '../env';

const GoogleLoginBtn = ([onGoogleLogin]) => {

    const [userObj, setUserObj]= useState({
        email:"",
        name:""
      })

    const onSuccess = async (response) => {
        // await onGoogleLogin({
            setUserObj({
                ...userObj, 
                email: response.profileObj.email, 
                name: response.profileObj.name
            // })

        });
    }

    const onFailure = (error) => {
        console.log(error);
    }
    return (
        <div>
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Google Login"
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </div>
    );
};

export default GoogleLoginBtn;