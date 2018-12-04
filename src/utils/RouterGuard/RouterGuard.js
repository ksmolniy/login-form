import React from 'react';
import { connect } from 'react-redux';

const RouterGuard = ({ isLogIn, Auth, Main }) => {
  return isLogIn ? Main : Auth;
}


const mapStateToProps= ({ auth: { isLogIn } }) => ({ isLogIn });

const enhance = connect(mapStateToProps);

const connectedGuard = enhance(RouterGuard);

export default connectedGuard;
