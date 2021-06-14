import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';


function Cards() {
    return (
        <div style={{display: 'flex', marginTop: '3%', marginLeft:'26%'}}>
            <Card style={{display: 'flex', background: 'white', width: '70%', height: '150px', marginRight: '2%', borderRadius: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent style={{flex: '1 0 auto'}}>
                        <Typography style={{color: 'black'}} component="h2" variant="bold">
                            Welcome back Julie!
                        </Typography>
                    </CardContent>
                </div>
                <img
                    style={{marginLeft: 'auto', marginRight: '2%', padding: '2%'}}
                    src="/assets/undraw_file_analysis_8k9b.svg"
                    alt="cover"
                />
            </Card>
            <Card style={{background: 'white', width: '25%', height: '150px', borderRadius: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent style={{flex: '1 0 auto', paddingBottom: '0'}}>
                        <Typography style={{color: 'black'}} component="h2" variant="bold">
                            30% off
                        </Typography>
                        <Typography style={{color: 'black'}} variant="subtitle1" color="textSecondary">
                            on Courses
                        </Typography>
                    </CardContent>
                </div>
                <div style={{display : 'flex'}}>
                    <img
                        style={{marginLeft: '40%', padding: '0% 1% 1% 1%', width: '40%'}}
                        src="/assets/Group-137.svg"
                        alt="discount"
                    />
                    <img
                        style={{marginLeft: '4%', width: '8%', height: '35px', marginTop: 'auto'}}
                        src="/assets/More-Button.svg"
                        alt=""
                    />
                </div>
            </Card>
        </div>
    )
}

export default Cards
