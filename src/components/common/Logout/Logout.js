import React from 'react'
import { Button } from 'grommet'
import { Logout as LogoutIcon } from 'grommet-icons'

const Logout = ({ logout }) => (
  <Button 
    color="brand"
    icon={<LogoutIcon />}
    label="Выйти"
    onClick={logout}
  />
);

export default Logout;
