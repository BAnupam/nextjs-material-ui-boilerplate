import {  Typography } from '@material-ui/core'
import React from 'react'
import Rowcard from '../rowcard/Rowcard'


function Rowpost() {
    return (
        <div style={{display: 'inline-block', marginLeft:'28%', marginRight: '0px', width: '50%'}} >
            <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '2%', paddingBottom: '3%', paddingRight : '0px'}}>
                <Typography style={{color: 'grey', fontSize: '27px'}} component="h2" variant="caption">
                    Recommended Courses
                </Typography>
                <img style={{marginRight: '9%'}} src="/assets/back.svg" alt="" />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', marginRight : '0px'}}>
                <Rowcard />
                <Rowcard />
                <Rowcard />
            </div>
        </div>
    )
}

export default Rowpost
