import React, { Component } from 'react'
import { Grid, Box } from 'grommet';
import { Switch, Route } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import TopBar from '../TopBar/TopBar';
import Tasks from '../Tasks/Tasks';
import TasksCreate from '../TasksCreate/TasksCreate';
import './Main.scss';
import { connect } from 'react-redux';
import { gettingBalanceStart } from '../../../store/reducers/balance';
import { logOut } from '../../../store/reducers/auth';

const areas = [
  { name: 'topbar', start: [0, 0], end: [1, 0] },
  { name: 'content', start: [0, 1], end: [1, 1] },
];

const columns = ['xsmall', 'flex'];
const rows = ['xsmall', 'flex'];

class Main extends Component {

  componentDidMount() {
    const { getBalance } = this.props;
    getBalance();
  }

  render() {
    const { balance, commentPrice, logout } = this.props;

    return (
      <Grid
        className="main"
        areas={areas}
        columns={columns}
        rows={rows}
      >
        <TopBar balance={balance} commentPrice={commentPrice} logout={logout} />
        <Box gridArea="content">
          <Switch>
            <Route path={routes.TASKS} exact component={Tasks} />
            <Route path={routes.TASKS_CREATE} exact component={TasksCreate} />
          </Switch>
        </Box>
      </Grid>
    );
  }
}

const mapStateToProps = ({ balance: { balance, comment_price } }) => ({
  balance,
  commentPrice: comment_price,
})
const mapDispatchToProps = (dispatch) => ({
  getBalance: () => dispatch(gettingBalanceStart()),
  logout: () => dispatch(logOut()),
})

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(Main);
