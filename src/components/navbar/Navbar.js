import React from 'react';

import { AppBar, Toolbar, CssBaseline} from '@material-ui/core';
import styles from './style.css'

function Navbar() {
  return (
    <div>
      <CssBaseline />
      <AppBar style={{width: '75%', backgroundColor: 'white', marginLeft: 'auto'}} position="relative" >
      <CssBaseline />
        <Toolbar style={{marginLeft: 'auto', backgroundColor: 'white'}}>
          <img style={{marginRight: '67px'}} src="/assets/search-big.svg" alt="" />
          <img style={{marginRight: '45px'}} src="/assets/notification.svg" alt="" />
          <img style={{marginRight: '15px'}} src="/assets/logout-2.svg" alt="" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
