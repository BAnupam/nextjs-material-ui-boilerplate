import React from 'react';
import {
  Drawer,
  ListItem,
  List,
  CssBaseline,
  makeStyles,
  Tabs,
  Tab,
} from '@material-ui/core';
import Chat from '../chat/Chat'
import Alert from '../alert/Alert';
import { Typography } from '@material-ui/core';
import pageStyle from './style.css';
const useStyles = makeStyles({
  nav: {
    background: 'black',
    width: '4%',
  },
  inbox: {
    background: '#F4F7FE',
    width: '21%',
    marginLeft: '4%',
    overflow: 'auto'
  },
});

function Sidebar() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Drawer
        classes={{ paper: classes.nav }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <img src="/assets/Logo.svg" alt="Logo" />
          </ListItem>
          <ListItem style={{ marginBottom: '10%', paddingBottom: '30%' }}>
            <img
              style={{ maxWidth: '150%', position: 'relative', left: '-23px' }}
              src="/assets/house.svg"
              alt="Logo"
            />
          </ListItem>
          <ListItem style={{ marginBottom: '10%', paddingBottom: '30%' }}>
            <img
              style={{ maxWidth: '60%' }}
              src="/assets/folder.svg"
              alt="Logo"
            />
          </ListItem>
          <ListItem style={{ marginBottom: '10%', paddingBottom: '30%' }}>
            <img
              style={{ maxWidth: '60%' }}
              src="/assets/pie-chart.svg"
              alt="Logo"
            />
          </ListItem>
          <ListItem style={{ marginBottom: '10%', paddingBottom: '30%' }}>
            <img
              style={{ maxWidth: '60%' }}
              src="/assets/settings-1.svg"
              alt="Logo"
            />
          </ListItem>
          <ListItem style={{ marginBottom: '10%', paddingBottom: '30%' }}>
            <img
              style={{ maxWidth: '60%' }}
              src="/assets/settings.svg"
              alt="Logo"
            />
          </ListItem>
          <ListItem style={{ top: '60%' }}>
            <img
              style={{ maxWidth: '60%' }}
              src="/assets/Group-25.svg"
              alt="Logo"
            />
          </ListItem>
        </List>
      </Drawer>
      <Drawer classes={{ paper: classes.inbox }} variant="permanent">
        <img
          style={{ width: 'auto', marginLeft: 'auto', marginRight: 'auto' }}
          src="/assets/EzRY.svg"
          alt=""
        />
        <Tabs style={{paddingTop: '5%', textAlign: 'center'}}>
          <Tab label="Activity" />
          <Tab label="Notifications" />
        </Tabs>
        <List style={{margin: '8%'}}>
          <ListItem style={{ paddingTop: '4%', paddingBottom: '4%'}}>
            <Typography style={{color: 'black'}} component="h5" variant="normal">
              Today
            </Typography>
            <img style={{transform: 'rotate(90deg) scale(0.4)', height: '25px'}} src="/assets/back.svg" alt="" />
          </ListItem>
          <Alert />
          <Alert />
          <Alert />
          <Alert />
          <Alert />
          <Alert />
        </List>
        <Chat/>
      </Drawer>
    </div>
  );
}

export default Sidebar;