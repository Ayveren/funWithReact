import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = () => {
  return (
    <CircularProgress
      size={80}
      thickness={8}
      style={{
        position:'fixed',
        top: '50%',
        left: '50%'
      }}
    />
  )
};
export default Loading;