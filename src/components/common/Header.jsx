import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = () => {
  return (
    <AppBar
      style={{margin: 'auto 0'}}
      showMenuIconButton={false}
      title={'Fun With React'}
    />
  );
};

export default Header;
