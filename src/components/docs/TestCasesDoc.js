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

          <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
            Creating a test case
          </Typography>
          <Box component="ol" sx={{ pl: 3, mb: 3, '& li': { mb: 1 } }}>
            <Typography component="li" variant="body1">
              Open the <strong>Tests</strong> tab.
            </Typography>
            <Typography component="li" variant="body1">
              In the <strong>Test Cases</strong> sidebar, click the folder icon
              first if you want to group tests, then click the{' '}
              <strong>+</strong> icon to open <em>Create New Test Case</em>.
            </Typography>
            <Typography component="li" variant="body1">
              Enter a <strong>Test Case Name</strong>, optionally choose a{' '}
              <strong>Parent Folder</strong>, then click{' '}
              <strong>Create Test Case</strong>.
            </Typography>
          </Box>

          <Typography variant="h5" gutterBottom>
            Adding mock data
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
            Select the new test case and add mock data for it either by using
            the <strong>Record</strong> tab to capture live traffic (see the{' '}
            <em>Recording &amp; Codegen</em> page), or by uploading a HAR /
            Postman export directly from the <strong>Mocks</strong> tab. The
            screenshots below show the test case tree and the resulting mock
            data view.
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