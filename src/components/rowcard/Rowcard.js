import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function Rowcard() {
    return (
        <div>
            <Card style={{background: 'white', width: '90%', height: '300px', marginRight: '5%', borderRadius: '20px'}}>
                <CardMedia 
                    component="img" 
                    alt="post-media"
                    height="50%"
                    image="/assets/nordwood-themes-ubIWo074QlU-unsplash.svg"
                    style={{padding: '10px', borderRadius: '20px'}}
                />
                <CardContent style={{}}>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <Typography style={{color: 'grey'}} component="h6" variant="caption">
                            Graphic Design
                        </Typography>
                        <div style={{background: 'rgba(0, 181, 146, 10%)', borderRadius: '17px', width: '40%', textAlign: 'center'}}>
                            <Typography style={{color: '#00B592', paddingTop: '3px'}} component="h6" variant="bold">
                                8h 51min
                            </Typography>
                        </div>
                    </div>
                    <Typography style={{color: 'black', maxWidth: '70%', paddingTop: '5%'}} component="h6" variant="bold">
                        How To Become Great Graphic Designer in 7 Days
                    </Typography>
                    <div style={{display:'flex', justifyContent: 'space-between', marginTop: '15%'}}>
                        <Typography style={{color: 'grey', fontSize: '9px'}} component="h6" variant="caption">
                            (15,250)
                        </Typography>
                        <Typography style={{color: 'grey', fontSize: '9px'}} component="h6" variant="caption">
                            2,526,471 Views
                        </Typography>
                    </div>
                    <Typography style={{color: 'grey', fontSize: '9px', textAlign: 'center', marginTop: '2%'}} component="h6" variant="caption">
                        $30/person
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Rowcard
