// @flow
import * as React from 'react';
import { Box } from 'grommet';
import './AuthModal.scss';

type props = {|
  title: string,
  children: React.Node,
|}

const AuthModal = ({ title, children }: props) => (
  <div className="auth-modal">
    <Box elevation="medium" className="auth-modal__container">
      <header className="auth-modal__header">
        { title }
      </header>
      <div className="auth-modal__body">
        { children }
      </div>
    </Box>
  </div>
);

export default AuthModal;
