import React from 'react';
import SignInPopup from './SignupSection/SignInPopup';

export default class Signup extends React.Component{
    render(){
        return(
            <div class="signupPortion">
                <h1>Experience best in photosharing!</h1>
                <h3>Share everyday moments, win prize</h3>
                <button type="button" class="btn login-button Signup" data-toggle="modal" data-target="#ModelName" aria-hidden="true">
                    Sign up
                </button>
                <SignInPopup/>
            </div>
            
                
            
        );
    }
}