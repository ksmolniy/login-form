// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { type State } from './../../store/store';

type Props = {
  children: React.Node,
  isLogIn: boolean,
}

const RouterGuard = ({ children, isLogIn }: Props) => (<React.Fragment>
  { isLogIn ? children : <Redirect to={routes.LOGIN} /> }
  </ React.Fragment>
)

const mapStateToProps = ({ user: { isLogIn } } : State) => ({ isLogIn });

const enhance = connect(mapStateToProps);

const connectedGuard = enhance(RouterGuard);

export default connectedGuard;
