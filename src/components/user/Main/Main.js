import React from 'react'
import { Grid, Box } from 'grommet';
import { Switch, Route } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import Sidebar from '../Sidebar/Sidebar';
import TopBar from '../TopBar/TopBar';
import Tasks from '../Tasks/Tasks';
import TasksCreate from '../TasksCreate/TasksCreate';
import './Main.scss';

const areas = [
  { name: 'sidebar', start: [0, 1], end: [0, 1] },
  { name: 'topbar', start: [0, 0], end: [1, 0] },
  { name: 'content', start: [1, 1], end: [1, 1] },
];

const columns = ['xsmall', 'flex'];
const rows = ['xsmall', 'flex'];

const Main = () => (
  <Grid
    className="main"
    areas={areas}
    columns={columns}
    rows={rows}
  >
    <Sidebar />
    <TopBar />
    <Box gridArea="content">
      <Switch>
        <Route path={routes.TASKS} exact component={Tasks} />
        <Route path={routes.TASKS_CREATE} exact component={TasksCreate} />
      </Switch>
    </Box>
  </Grid>
);

export default Main;
