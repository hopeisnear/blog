import React from 'react';
import { FacebookIcon } from 'react-share';

import './Login.scss';

const onLogin = () => {
  FB.login(() => {}, { scope: 'public_profile,email' });
};

export default function Login() {
  return (
    <div className="Login">
      <button type="button" onClick={onLogin}>
        <FacebookIcon size={25} />
      </button>
    </div>
  );
}
