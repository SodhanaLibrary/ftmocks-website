import React from 'react';
import { Box, Typography } from '@mui/material';
import { commonCodeStye } from './utils';

const AddingProjectDoc = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Adding a Project
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        FtMocks can manage mock data for more than one project at a time. Each
        project is just an <code>ftmocks.env</code> file pointing at its own{' '}
        <code>MOCK_DIR</code>; the Projects table on the home page lets you
        add, switch between, and remove them without restarting the server.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Add a project from the UI
      </Typography>
      <Box component="ol" sx={{ pl: 3, mb: 3, '& li': { mb: 1 } }}>
        <Typography component="li" variant="body1">
          Open <code>http://localhost:&lt;PORT&gt;/</code> — the home page
          shows the Projects table.
        </Typography>
        <Typography component="li" variant="body1">
          Click <strong>Add Project</strong>.
        </Typography>
        <Typography component="li" variant="body1">
          In <strong>Environment Location</strong>, enter the path to the
          project's <code>ftmocks.env</code> file (e.g.{' '}
          <code>./example/my-project/ftmocks.env</code>), then click{' '}
          <strong>Create Project</strong>.
        </Typography>
        <Typography component="li" variant="body1">
          Click the new row in the Projects table to switch to it. FtMocks
          starts serving mocks from that project's <code>MOCK_DIR</code>{' '}
          immediately — no restart required.
        </Typography>
      </Box>

      <Typography variant="body1" gutterBottom>
        You can remove a project from the table with its delete icon at any
        time; this only removes it from the list, it does not delete the
        project's mock data on disk.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Creating the env file first
      </Typography>
      <Typography variant="body1" gutterBottom>
        If the project doesn't have an <code>ftmocks.env</code> yet, create
        one before adding it (see <em>Getting Started</em> for the full
        variable list):
      </Typography>
      <Box component="pre" sx={commonCodeStye}>
        MOCK_DIR=./example/my-project/testMockData
        <br />
        PORT=5000
        <br />
        PREFERRED_SERVER_PORTS=[4051]
      </Box>
    </Box>
  );
};

export default AddingProjectDoc;
