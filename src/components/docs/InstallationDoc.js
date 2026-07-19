import React, { useState } from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import { commonCodeStye } from "./utils";

const Installation = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Heading */}
      <Typography variant="h4" gutterBottom>
        Getting Started
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        You only need Node.js 20+ and npm. Run one command and you're recording your first test in under five minutes.
      </Typography>

      {/* Quickstart */}
      <Typography variant="h5" gutterBottom>
        Quickstart (recommended)
      </Typography>
      <Typography variant="body1" gutterBottom>
        From your project directory, run:
      </Typography>
      <Box component="pre" sx={commonCodeStye}>
        npx ftmocks init-playwright-all
      </Box>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        This single command installs Playwright, clones and starts{" "}
        <code>ftmocks-server</code>, and scaffolds the project structure. Open{" "}
        <code>http://localhost:5000/</code> to start recording.
      </Typography>

      <Box sx={{ mb: 3 }}>
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

      {/* Manual setup */}
      <Typography variant="h5" gutterBottom>
        Manual setup
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you prefer to set things up yourself:
      </Typography>
      <Typography variant="body1" gutterBottom>
        1. Clone the repository:
      </Typography>
      <Box component="pre" sx={commonCodeStye}>
        git clone https://github.com/SodhanaLibrary/ftmocks-server.git
      </Box>
      <Typography variant="body1" gutterBottom>
        2. Install dependencies:
      </Typography>
      <Box component="pre" sx={commonCodeStye}>
        cd ftmocks-server && npm install
      </Box>
      <Typography variant="body1" gutterBottom>
        3. Install Playwright:
      </Typography>
      <Box component="pre" sx={commonCodeStye}>
        npx playwright install
      </Box>

      {/* Configuration Section */}
      <Typography variant="h5" gutterBottom>
        Configuration
      </Typography>
      <Typography variant="body1" gutterBottom>
        Create an <code>ftmocks.env</code> file in the project root:
      </Typography>
      <Box component="pre" sx={commonCodeStye}>
        MOCK_DIR=./example/my-project/testMockData
        <br />
        PORT=5000
        <br />
        PREFERRED_SERVER_PORTS=[4051]
      </Box>

      {/* Running the Project Section */}
      <Typography variant="h5" gutterBottom>
        Start the server
      </Typography>
      <Box component="pre" sx={commonCodeStye}>
        npm start &lt;absolute path to ftmocks.env&gt;
      </Box>
      <Typography variant="body1" gutterBottom>
        Then open <code>http://localhost:5000/</code> to access the FtMocks UI.
      </Typography>
    </Box>
  );
};

export default Installation;
