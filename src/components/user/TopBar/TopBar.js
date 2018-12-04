import React from 'react';
import { Box } from 'grommet';
import { Currency } from 'grommet-icons';
import './TopBar.scss';

const TopBar = () => (
  <Box
    className="topbar"
    gridArea="topbar"
  >
    <Currency />
  </Box>
)

export default TopBar;
