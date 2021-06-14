import React from 'react'
import {ListItem, Typography} from '@material-ui/core'

function Alert() {
    return (
        <div style={{ paddingTop: '4%', paddingBottom: '4%'}}>
            <ListItem>
            <img style={{width: '13%'}} src="/assets/Group-25.svg" alt=""/>
            <div style={{paddingLeft: '10%'}}>
              <Typography component="h5" variant="normal">
                Project Noname
              </Typography>
              <Typography style={{fontSize: '10px'}} component="h6" variant="caption">
                13 minutes ago
              </Typography>
            </div>
          </ListItem>
        </div>
    )
}

export default Alert
