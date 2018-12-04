import React from 'react';
import { Button } from 'grommet';
import { Currency } from 'grommet-icons';

const Balance = ({ count }) => (
  <Button
    className="balance"
    color="brand"
    label={''+count}
    icon={<Currency size="2rem" />}
  />
)

export default Balance;
