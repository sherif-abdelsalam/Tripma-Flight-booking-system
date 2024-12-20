"use client";
import { Button } from "../reuse/button";
import "./sign-form.css";
export default function SignForm({ isSignUp, children }) {
  return (
    <div className="signup-form">
      <header className="signup-header">
        <div className="signup-header-top">
          <p className="title">{children}</p>
        </div>
        {isSignUp && (
          <p>
            Tripma is totally free to use. Sign up using your email address or
            phone number below to get started.
          </p>
        )}
      </header>
      <form className="signup-form-body">
        {isSignUp && (
          <input type="text" name="username" placeholder="Username" required />
        )}
        <input
          type="email"
          id="emial"
          name="email"
          placeholder="Email"
          required
        />

        {isSignUp && (
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            required
          />
        )}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        {isSignUp && (
          <div className="signup-form-checkbox">
            <div className="signup-form-checkbox-item">
              <input type="checkbox" name="termsChecked" required />
              <label>I agree to the terms and conditions</label>
            </div>
            <div className="signup-form-checkbox-item">
              <input type="checkbox" required />
              <label>Send me the latest deal alerts</label>
            </div>
          </div>
        )}

        <button className="submit-button" type="submit">
          {isSignUp ? "Create account" : "Login"}
        </button>
      </form>
      <div className="divider">
        <span>or</span>
      </div>
      <div className="social-media-signup">
        <Button imageTitle="google">Continue with Google</Button>
        <Button imageTitle="apple">Continue with Apple</Button>
        <Button imageTitle="facebook">Continue with Facebook</Button>
      </div>
    </div>
  );
}
