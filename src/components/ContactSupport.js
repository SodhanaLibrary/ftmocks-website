import React from 'react';
import { Box, Typography, Link, List, ListItem, ListItemIcon, ListItemText, Divider, Container } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';

const ContactSupport = () => {
  return (
    <Container>
    <Box sx={{ pt: 6, mt: 12, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Contact Support
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Need further assistance? We are here to help:
      </Typography>
      
      <List>
        <ListItem>
          <ListItemIcon>
            <ChatIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Chat"
            secondary={<Box>Connect with me directly on <Link target="_target" underline="hover" color="primary" href="https://www.linkedin.com/in/srinivas-dasari-771a0449/">LinkedIn</Link>.</Box>}
          />
        </ListItem>
        
        <Divider variant="middle" />

        <ListItem>
          <ListItemIcon>
            <EmailIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Email Support"
            secondary={
              <>
                Reach out to us at{' '}
                <Link href="mailto:support@toolname.com" underline="hover" color="primary">
                  admin@ftmocks.com
                </Link>{' '}
                for more complex issues.
              </>
            }
          />
        </ListItem>
      </List>
    </Box>
    </Container>
  );
};

export default ContactSupport;