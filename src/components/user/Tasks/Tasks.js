import React from 'react'
import { Grid, Box, Anchor } from 'grommet';
import { AddCircle } from 'grommet-icons';
import './Tasks.scss';

const Task = ({ isComplited, post }) => (
  <Box
    pad="1rem"
    background={ isComplited ? 'status-ok' : 'light-3' }
    animation="fadeIn"
    elevation="small"
    round={round}
  >
    <Anchor alignSelf="center" href={`https://vk.com/wall${post}`} target="__blank">{post}</Anchor>
  </Box>
)

const border = {
  color: 'status-ok',
  size: 'small',
}

const round = 'medium';

const CreateTask = () => (
  <Box 
    border={border}
    justify="center"
    align="center"
    elevation="small"
    round={round}
  >
    <AddCircle size="xlarge" color="status-ok" />
  </Box>
);

const Tasks = () => (
  <Grid
    className="tasks"
    rows="small"
    columns="small"
    gap="medium"
  >
    {/* {[].map(item => <Task isComplited />)} */}
    <CreateTask />
    <Task isComplited post="-134805260_42" />
    <Task />
  </Grid>
)

export default Tasks;
