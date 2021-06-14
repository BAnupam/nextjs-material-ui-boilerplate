import React from 'react'
import { Card, Typography } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

function Chat() {
    return (
        <div style={{margin: 'auto 7% 7% 7%'}}>
            <Card style={{padding: '3%'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography component="h3" variant="bold">
                        Live Chat
                    </Typography>
                    <MoreVert />
                </div>
                <div style={{background: '#F5FBFF', borderRadius: '30px', marginTop: '50%'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography style={{padding: '5% 3%', color: 'gray'}} component="h6" variant="bold">
                            Type your message...
                        </Typography>
                        <img style={{padding: '3%', width: '14%'}} src="/assets/send-button.svg" alt="Send" />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Chat
