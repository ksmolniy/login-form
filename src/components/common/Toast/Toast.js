import React from 'react';
import { Layer, Box, Text, Button } from 'grommet';

const Toast = ({ message }) => (
  <Layer modal={false} full='horizontal' position='top'>
    <Box
      background='light-3'
      pad='small'
      direction='row'
      justify='between'
      align='center'
    >
      <Text size='large'>{ message }</Text>
    </Box>
  </Layer>
);

export default Toast;
