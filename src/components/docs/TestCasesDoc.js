import React, {useState} from 'react';
import { Box, Typography,  Link, Button } from '@mui/material';
import {commonCodeStye} from './utils';

const Installation = () => {
  return (
        <Box sx={{ padding: 4 }}>
          {/* Heading */}
          <Typography variant="h4" gutterBottom>
            Test Cases
          </Typography>
    
          <Typography variant="body1" gutterBottom>
            Create a test case in FtMocks and upload the corresponding mock data.
          </Typography>
          <Box sx={{p: 1, background: '#fff'}}>
            <img
              src="/static/test_cases_1.png"
              alt="export HAR file"
              loading="lazy"
              width="100%"
            />
          </Box>
          <Box sx={{p: 1, mt: 1, background: '#fff'}}>
            <img
              src="/static/test_cases_2.png"
              alt="export HAR file"
              loading="lazy"
              width="100%"
            />
          </Box>
          <Box sx={{p: 1, mt: 1, background: '#fff'}}>
            <img
              src="/static/test_cases_3.png"
              alt="export HAR file"
              loading="lazy"
              width="100%"
            />
          </Box>
        </Box>
  );
};

export default Installation;