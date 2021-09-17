import React from 'react'
import {auth , provider} from "./firebase";
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";
import './signUp.css';

function SignUp() {
    const [state , dispatch] = useStateValue();
    

const click = ()=>{
    auth.signInWithPopup(provider).then(result =>{
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        });
        console.log(result.user)
    }).catch((e)=>alert(e));

}

    return (
        // <div>
        //     <button type="submit" onClick={click}>sign in</button>
        // </div>
        <>
        <h2>CCC Recruitment 2021 : Sign in/up Form</h2>
<div class="container" id="container">
  <div class="form-container sign-up-container">
    <form action="#">
      <h1>Create Account</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </form>
  </div>
  <div class="form-container sign-in-container">
    <form action="#">
      <h1>Create Account</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your account</span>
      <input type="name" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button>Sign Up</button>
    </form>
  </div>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button class="ghost" type="submit" id="signIn" onClick={click}>Sign In</button>
      </div>
      <div class="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button class="ghost" id="signUp" type="submit" onClick={click}>Sign In</button>
      </div>
    </div>
  </div>
</div>

<footer>
  <p>
    Created with <i class="fa fa-heart"></i> by
    <a target="_blank" href="https://florin-pop.com">Cloud Computing Cell</a>
    Read how I created this and how you can join the challenge
    <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>
  </p>
</footer>
</>
    )
}

export default SignUp
