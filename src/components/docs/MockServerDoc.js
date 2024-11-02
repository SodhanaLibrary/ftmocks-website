import React, {useState} from 'react';
import { Box, Typography,  Link, Button } from '@mui/material';
import {commonCodeStye} from './utils';

const Installation = () => {
  return (
        <Box sx={{ padding: 4 }}>
          {/* Heading */}
          <Typography variant="h4" gutterBottom>
            Mock Server
          </Typography>
    
          <Typography variant="body1" gutterBottom>
          Now, select a test case and start the mock server. The server will prioritize serving responses from the mock data of the selected test case. If a matching response isn't found in the test case data, it will fall back to the default mock data to ensure a complete response.
          </Typography>
          <Box sx={{p: 1, background: '#fff'}}>
            <img
              src="/static/mock_server.png"
              alt="export HAR file"
              loading="lazy"
              width="100%"
            />
          </Box>
        </Box>
  );
};

export default Installation;