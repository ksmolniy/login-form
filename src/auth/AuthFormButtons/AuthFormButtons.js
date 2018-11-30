// @flow
import * as React from 'react';
import './AuthFormButtons.scss';

type props = {|
  children: React.Node,
|}

const AuthFormButtons = ({ children }: props) => (
  <div className="auth-form-buttons">
    { children }
  </div>
);

export default AuthFormButtons;
