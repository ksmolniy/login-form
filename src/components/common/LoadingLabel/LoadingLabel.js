import React from 'react';
import { StatusGood, StatusCritical } from 'grommet-icons';
import Spinner from '../Spinner/Spinner';

const LoadingLabel = React.memo(({ loading, success, failed, title }) => {
  if (loading) {
    return <Spinner />
  }

  if (success) {
    return <StatusGood color="status-ok" />
  }

  if (failed) {
    return <StatusCritical color="status-error" />
  }

  return title;
});

export default LoadingLabel;
