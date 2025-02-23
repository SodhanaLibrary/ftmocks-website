import React, {useState} from 'react';
import { Box, Typography,  Link, Button } from '@mui/material';
import {commonCodeStye} from './utils';

const ReactExample = () => {
  return (
        <Box sx={{ padding: 4 }}>
          {/* Heading */}
          <Typography variant="h4" gutterBottom>
            ReactJS Applications with FtMocks
          </Typography>
          <Box>
            <iframe
              src={`https://www.youtube.com/embed/yZXrkk3prUM`}
              title="FtMocks Demo - Achieve 80% Code coverage for your frontend applications in less than 3 minutes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "500px",
                border: "none",
              }}
            ></iframe>
          </Box>
          <Typography variant="h5" gutterBottom>
            Setup React Example
          </Typography>
          <Typography variant="body1" gutterBottom>
            1. Clone the repository:
          </Typography>
          <Box component="pre" sx={commonCodeStye}>
            git clone https://github.com/SodhanaLibrary/ftmocks-server.git
          </Box>
          <Typography variant="body1" gutterBottom>
            2. Navigate into the project directory:
          </Typography>
          <Box component="pre" sx={commonCodeStye}>
            cd ftmocks-server
          </Box>
          <Typography variant="body1" gutterBottom>
            2. Navigate into React example directory:
          </Typography>
          <Box component="pre" sx={commonCodeStye}>
            cd example/my-project
          </Box>
          <Typography variant="body1" gutterBottom>
            3. Install dependencies:
          </Typography>
          <Box component="pre" sx={commonCodeStye}>
            npm install
          </Box>
          <Typography variant="body1" gutterBottom>
            3. Run tests:
          </Typography>
          <Box component="pre" sx={commonCodeStye}>
            npm test
          </Box>
        </Box>
  );
};

export default ReactExample;