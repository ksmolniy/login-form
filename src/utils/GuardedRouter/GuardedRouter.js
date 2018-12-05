import React, { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as routes from '../../constants/routes';
import Signin from '../../components/auth/Signin/Signin';
import Main from '../../components/user/Main/Main';
import Login from '../../components/auth/Login/Login';
import { checkToken } from '../../store/reducers/auth';

const ProtectedRoute = ({ path, component: Comp, isAllowed, redirectTo }) =>
  <Route
    path={path}
    render={() => (isAllowed ? <Comp /> : <Redirect to={redirectTo} />)}
  />;

class GuardedRouter extends Component {
  componentDidMount() {
    const { checkToken, isLogIn } = this.props;
    if (isLogIn) {
      checkToken();
    }
  }

  render() {
    const { isLogIn } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <ProtectedRoute path={routes.LOGIN} component={Login}  isAllowed={!isLogIn}  redirectTo={routes.TASKS} />
          <ProtectedRoute path={routes.SIGNIN} component={Signin}  isAllowed={!isLogIn}  redirectTo={routes.TASKS} />
          <ProtectedRoute path={routes.TASKS} component={Main} isAllowed={isLogIn} redirectTo={routes.LOGIN} />
          <Redirect to={isLogIn ? routes.TASKS : routes.LOGIN} />,
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth: { isLogIn } }) => ({ isLogIn });
const mapDispatchToProps = (dispatch) => ({
  checkToken: () => dispatch(checkToken()),
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

const connectedGuard = enhance(GuardedRouter);

export default connectedGuard;
