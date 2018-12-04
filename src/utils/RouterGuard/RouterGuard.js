import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as routes from '../../constants/routes';
import Signin from '../../components/auth/Signin/Signin';
import Main from '../../components/user/Main/Main';
import Login from '../../components/auth/Login/Login';
import { checkToken } from '../../store/auth';

const createProtectedRoute = (path, Comp, isAllowed, redirectTo) =>
  <Route
    path={path}
    render={() => (isAllowed ? <Comp /> : <Redirect to={redirectTo} />)}
  />;

class RouterGuard extends Component {
  componentDidMount() {
    const { checkToken, isLogIn } = this.props;
    if (isLogIn) {
      checkToken();
    }
  }

  render() {
    const { isLogIn } = this.props;

    return ([
        createProtectedRoute(routes.LOGIN, Login, !isLogIn, routes.TASKS),
        createProtectedRoute(routes.SIGNIN, Signin, !isLogIn, routes.TASKS),
        createProtectedRoute(routes.TASKS, Main, isLogIn, routes.LOGIN),
        <Redirect to={isLogIn ? routes.TASKS : routes.LOGIN} />,
    ])
  }
}

const mapStateToProps = ({ auth: { isLogIn } }) => ({ isLogIn });
const mapDispatchToProps = (dispatch) => ({
  checkToken: () => dispatch(checkToken()),
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

const connectedGuard = enhance(RouterGuard);

export default connectedGuard;
