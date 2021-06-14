import { Card, CardContent, List, ListItem, Typography } from '@material-ui/core'
import { FiberManualRecord, InsertInvitation } from '@material-ui/icons'
import React from 'react'

function Event() {
    return (
        <div style={{marginLeft: 'auto', marginBottom: 'auto', width: '20%', float: 'right', marginRight: '2%', marginTop: '4%'}}>
            <Card style={{background: 'white', borderRadius: '20px', top: '20%'}}>
                <CardContent>
                    <div  style={{display: 'flex', paddingBottom: '16px'}}>            
                        <Typography style={{color: 'black'}} component="h3" variant="bold">
                            Upcoming Class
                        </Typography>
                        <Typography style={{color: 'black', padding: '3px', marginLeft: 'auto'}} component="h5" variant="normal">
                            Today
                        </Typography>
                        <img style={{transform: 'rotate(90deg) scale(0.4)', height: '25px'}} src="/assets/back.svg" alt="" />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', paddingBottom: '10px'}}>
                            <div style={{background: '#39D5CF', color: 'white', borderRadius: '50%', width: '36px', height: '36px', textAlign: 'center'}}>
                                <InsertInvitation style={{marginTop: '5px'}} />
                            </div>
                            <div style={{paddingLeft: '15%', maxWidth: '100%'}}>
                                <Typography style={{color: 'black', paddingRight: '25%', whiteSpace: 'nowrap'}} component="h3" variant="bold">
                                    Graphic Design
                                </Typography>
                                <Typography style={{color: 'black', paddingRight: '25%', whiteSpace: 'nowrap'}} component="h5" variant="caption">
                                    10 AM - 11 AM
                                </Typography>
                            </div>
                        </div>
                        <div style={{display: 'flex', paddingBottom: '10px'}}>
                            <div style={{background: '#FF007C', color: 'white', borderRadius: '50%', width: '36px', height: '36px', textAlign: 'center'}}>
                                <InsertInvitation style={{marginTop: '5px'}} />
                            </div>
                            <div style={{paddingLeft: '15%', maxWidth: '100%'}}>
                                <Typography style={{color: 'black', paddingRight: '25%', whiteSpace: 'nowrap'}} component="h3" variant="bold">
                                    Python
                                </Typography>
                                <Typography style={{color: 'black', paddingRight: '25%', whiteSpace: 'nowrap'}} component="h5" variant="caption">
                                    11 AM - 12 PM
                                </Typography>
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                        <div style={{background: '#7D00B5', color: 'white', borderRadius: '50%', width: '36px', height: '36px', textAlign: 'center'}}>
                                <InsertInvitation style={{marginTop: '5px'}} />
                            </div>
                            <div style={{paddingLeft: '15%', maxWidth: '100%'}}>
                                <Typography style={{color: 'black', paddingRight: '25%', whiteSpace: 'nowrap'}} component="h3" variant="bold">
                                    React.js
                                </Typography>
                                <Typography style={{color: 'black', paddingRight: '25%', whiteSpace: 'nowrap'}} component="h5" variant="caption">
                                    2 PM - 3 PM
                                </Typography>
                            </div>
                        </div>
                        <img
                            style={{marginLeft: 'auto', width: '8%', marginTop: 'auto'}}
                            src="/assets/More-Button.svg"
                            alt="discount"
                        />
                    </div>
                </CardContent>
            </Card>
            <div style={{borderRadius: '20px', marginTop: '10%', padding: '1%'}}>
                <div>
                    <Typography style={{color: 'black', textAlign: 'center'}} component="h5" variant="bold">
                        People you may know
                    </Typography>
                    <List style={{paddingLeft: '0'}}>
                        <ListItem style={{display: 'flex', justifyContent: 'space-between'}}>
                            <img style={{width: '10%'}} src="/assets/Group-25.svg" alt="" />
                            <Typography style={{color: 'black', paddingTop: '2%'}} component="h5" variant="">
                                Josh Brolin
                            </Typography>
                            <div style={{background: 'black', color: 'white', padding: '1% 6% 1% 6%', borderRadius: '20px'}}>
                                <Typography component="h6" variant="bold">+ Add</Typography>
                            </div>
                        </ListItem>
                        <ListItem style={{display: 'flex', justifyContent: 'space-between'}}>
                            <img style={{width: '10%'}} src="/assets/Group-25.svg" alt="" />
                            <Typography style={{color: 'black', paddingTop: '2%'}} component="h5" variant="">
                                Josh Brolin
                            </Typography>
                            <div style={{background: 'black', color: 'white', padding: '1% 6% 1% 6%', borderRadius: '20px'}}>
                                <Typography component="h6" variant="bold">+ Add</Typography>
                            </div>
                        </ListItem>
                        <ListItem style={{display: 'flex', justifyContent: 'space-between'}}>
                            <img style={{width: '10%'}} src="/assets/Group-25.svg" alt="" />
                            <Typography style={{color: 'black', paddingTop: '2%'}} component="h5" variant="">
                                Josh Brolin
                            </Typography>
                            <div style={{background: 'black', color: 'white', padding: '1% 6% 1% 6%', borderRadius: '20px'}}>
                                <Typography component="h6" variant="bold">+ Add</Typography>
                            </div>
                        </ListItem>
                        <ListItem style={{display: 'flex', justifyContent: 'space-between'}}>
                            <img style={{width: '10%'}} src="/assets/Group-25.svg" alt="" />
                            <Typography style={{color: 'black', paddingTop: '2%'}} component="h5" variant="">
                                Josh Brolin
                            </Typography>
                            <div style={{background: 'black', color: 'white', padding: '1% 6% 1% 6%', borderRadius: '20px'}}>
                                <Typography component="h6" variant="bold">+ Add</Typography>
                            </div>
                        </ListItem>
                        <ListItem style={{display: 'flex', justifyContent: 'space-between'}}>
                            <img style={{width: '10%'}} src="/assets/Group-25.svg" alt="" />
                            <Typography style={{color: 'black', paddingTop: '2%'}} component="h5" variant="">
                                Josh Brolin
                            </Typography>
                            <div style={{background: 'black', color: 'white', padding: '1% 6% 1% 6%', borderRadius: '20px'}}>
                                <Typography component="h6" variant="bold">+ Add</Typography>
                            </div>
                        </ListItem>
                    </List>
                </div>
            </div>
            <Card style={{background: '#000000', borderRadius: '20px', color: 'white', textAlign: 'center', marginTop: '7%', marginBottom: '3%'}}>
                <CardContent style={{padding: '5% 3% 2% 3%'}}>
                    <Typography style={{textAlign: 'center', paddingBottom: '18%'}} component="h2" variant="bold">
                        My Learning
                    </Typography>
                    <Typography style={{textAlign: 'center', paddingBottom: '2%'}} component="h4" variant="bold">
                        Basics of Java
                    </Typography>
                    <Typography style={{maxWidth: '20%', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '12%'}} component="h5" variant="bold">
                        30% completed
                    </Typography>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{textAlign: 'left'}}>
                            <FiberManualRecord style={{width: '6%', opacity: '40%'}} />
                            <FiberManualRecord style={{width: '6%', marginRight: '3%'}}/>
                            <FiberManualRecord style={{width: '6%',opacity: '40%'}} />
                        </div>
                        <img style={{width: '10%'}} src="/assets/More-Button.svg" alt="" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Event
