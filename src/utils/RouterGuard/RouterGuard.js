import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as routes from '../../constants/routes';


const RouterGuard = ({ children, isLogIn }) => (<React.Fragment>
  { isLogIn ? children : <Redirect to={routes.LOGIN} /> }
  </ React.Fragment>
)

const mapStateToProps= ({ user: { isLogIn } }) => ({ isLogIn });

const enhance = connect(mapStateToProps);

const connectedGuard = enhance(RouterGuard);

export default connectedGuard;