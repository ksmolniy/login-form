// @flow
import * as React from 'react';
import cn from 'classnames';
import './AuthFormLabel.scss';

type props = {|
  label: string,
  reqired: boolean,
  children: React.Node,
  error: string | void,
|};

const AuthFormLabel = ({ label, reqired, children, error } : props) => (
  <label className="auth-form-label">
    { label }
    { reqired && <span className="auth-form-label--required">{' *'}</span> }
    { children }
    <span className="auth-form-label__error">{ error }</span>
  </label>
)

export default AuthFormLabel;
