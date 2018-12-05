import React, { Component } from 'react'
import { Grid, Box } from 'grommet';
import { Switch, Route } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import Sidebar from '../Sidebar/Sidebar';
import TopBar from '../TopBar/TopBar';
import Tasks from '../Tasks/Tasks';
import TasksCreate from '../TasksCreate/TasksCreate';
import './Main.scss';
import { connect } from 'react-redux';
import { gettingBalanceStart } from '../../../store/reducers/balance';

const areas = [
  { name: 'sidebar', start: [0, 1], end: [0, 1] },
  { name: 'topbar', start: [0, 0], end: [1, 0] },
  { name: 'content', start: [1, 1], end: [1, 1] },
];

const columns = ['xsmall', 'flex'];
const rows = ['xsmall', 'flex'];

class Main extends Component {

  componentDidMount() {
    const { getBalance } = this.props;
    getBalance();
  }

  render() {
    const { balance } = this.props;

    return (
      <Grid
        className="main"
        areas={areas}
        columns={columns}
        rows={rows}
      >
        <Sidebar />
        <TopBar balance={balance} />
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

const mapStateToProps = ({ balance: { count } }) => ({
  balance: count,
})
const mapDispatchToProps = (dispatch) => ({
  getBalance: () => dispatch(gettingBalanceStart()),
})

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(Main);
