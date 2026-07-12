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
          <Box>
            <iframe
              src={`https://www.youtube.com/embed/MmY5NQJWYNA`}
              title="Create Mock Data and Mock Server from HAR File - Using FtMocks"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "500px",
                border: "none",
              }}
            ></iframe>
          </Box>
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

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Running it from the UI
          </Typography>
          <Box component="ol" sx={{ pl: 3, mb: 3, '& li': { mb: 1 } }}>
            <Typography component="li" variant="body1">
              Open the <strong>Mock Server</strong> tab.
            </Typography>
            <Typography component="li" variant="body1">
              Pick a <strong>Test</strong> from the autocomplete — its recorded
              mocks (with a default-mock fallback) will be served.
            </Typography>
            <Typography component="li" variant="body1">
              Enter a <strong>Port</strong>, or reuse one of the{' '}
              <strong>Preferred Ports</strong> shown below the field (configured
              via <code>PREFERRED_SERVER_PORTS</code>).
            </Typography>
            <Typography component="li" variant="body1">
              Click <strong>Run</strong> to start it. While it's running the
              button becomes <strong>Update</strong>, letting you switch the
              test or port without stopping first.
            </Typography>
            <Typography component="li" variant="body1">
              Click <strong>Stop</strong> to shut it down.
            </Typography>
            <Typography component="li" variant="body1">
              Point your application's API calls at{' '}
              <code>http://localhost:&lt;port&gt;</code>.
            </Typography>
          </Box>
        </Box>
  );
};

export default Installation;