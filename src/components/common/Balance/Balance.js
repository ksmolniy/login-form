import React from 'react';
import { Button } from 'grommet';

const Balance = ({ balance, commentPrice }) => (
  <Button
    className="balance"
    color="brand"
    label={`${balance}₽ / ${Math.floor(balance/commentPrice)} в коментариях`}
  />
)

export default Balance;
