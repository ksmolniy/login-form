import React from 'react';
import { Box } from 'grommet';
import Logout from '../../common/Logout/Logout';
import Balance from '../../common/Balance/Balance';
import './TopBar.scss';

const TopBar = () => (
  <Box
    className="topbar"
    background="brand"
    gridArea="topbar"
    justify="end"
    align="center"
    gap="small"
    direction="row"
  >
    <Balance count={0} />
    <Logout />
  </Box>
)

export default TopBar;
