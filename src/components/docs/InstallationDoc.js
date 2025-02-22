import React, {useState} from 'react';
import { Box, Typography,  Link, Button } from '@mui/material';
import {commonCodeStye} from './utils';

const Installation = () => {
  return (
        <Box sx={{ padding: 4 }}>
          {/* Heading */}
          <Typography variant="h4" gutterBottom>
            Getting Started
          </Typography>
    
          {/* Prerequisites Section */}
          <Typography variant="h5" gutterBottom>
            Prerequisites
          </Typography>
          <Typography variant="body1" gutterBottom>
            To run this project, ensure you have the following installed on your machine:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                <Link href="https://nodejs.org/" target="_blank" rel="noopener">
                  Node.js
                </Link>{' '}
                (version 20 or later)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <Link href="https://www.npmjs.com/" target="_blank" rel="noopener">
                  npm
                </Link>{' '}
                (usually included with Node.js)
              </Typography>
            </li>
          </ul>
          <Box>
            <iframe
              src={`https://www.youtube.com/embed/_-idF5dU4YA`}
              title="How to setup FtMocks and run example project with it"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "500px",
                border: "none",
              }}
            ></iframe>
          </Box>
          {/* Installation Section */}
          <Typography variant="h5" gutterBottom>
            Installation
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
            3. Install dependencies:
          </Typography>
          <Box component="pre" sx={commonCodeStye}>
            npm install
          </Box>
          
          {/* Configuration Section */}
          <Typography variant="h5" gutterBottom>
            Configuration
          </Typography>
          <Typography variant="body1" gutterBottom>
            1. Create a <code>my-project.env</code> file for your project.
          </Typography>
          <Typography variant="body1" gutterBottom>
            2. Add the following environment variables in <code>my-project.env</code> in the project root:
          </Typography>
          <Box component="pre" sx={commonCodeStye}>
            MOCK_DIR=./example/my-project/testMockData
            <br />
            PORT=5000
            <br />
            PREFERRED_SERVER_PORTS=[4051]
            <br />
            MOCK_RECORDER_LIMIT=300
          </Box>
    
          {/* Running the Project Section */}
          <Typography variant="h5" gutterBottom>
            Running the Project
          </Typography>
          <Typography variant="body1" gutterBottom>
            To start the project, use:
          </Typography>
          <Box component="pre" sx={commonCodeStye}>
            npm start my-project
          </Box>
        </Box>
  );
};

export default Installation;