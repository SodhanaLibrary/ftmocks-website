import React from 'react';
import { List, ListItem, ListItemText, Box, Divider } from '@mui/material';
import contentData from './utils';

const Sidebar = ({setSection, section}) => (
  <Box
    sx={{
      minWidth: 260,
      bgcolor: 'background.paper',
      height: '100vh',
      borderRight: '1px solid #ddd',
      pt: 3,
    }}
  >
    <List>
      {contentData.map((item, index) => (
        <ListItem button onClick={() => setSection(index)} key={index}
          sx={{
            backgroundColor: (section  === index) ? 'action.selected' : 'inherit',
            '&:hover': {
              backgroundColor: (section  === index) ? 'action.selected' : 'action.hover',
            },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .delete-icon': {
              display: 'none',
            },
            '&:hover .delete-icon': {
              display: 'block',
            },
            cursor: 'pointer',
          }}
          >
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Sidebar;