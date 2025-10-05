import React, { useState } from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import { commonCodeStye } from "./utils";

const Installation = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Heading */}
      <Typography variant="h4" gutterBottom>
        Default Mock Data
      </Typography>

      {/* Prerequisites Section */}
      <Typography variant="h5" gutterBottom>
        Prerequisites
      </Typography>
      <Typography variant="body1" gutterBottom>
        Capture an entire network trace of the application, Recoding network
        calls or generating a HAR file filled with detailed network calls. They
        then upload this file to FtMocks, which uses it to create a robust set
        of default mock data covering a vast array of requests and responses.
      </Typography>
      <Box sx={{ p: 1, background: "#fff" }}>
        <img
          src="/static/default_mock_data_1.png"
          alt="export HAR file"
          loading="lazy"
          width="100%"
        />
      </Box>
      <Box sx={{ p: 1, background: "#fff", mt: 2 }}>
        <img
          src="/static/default_mock_data_2.png"
          alt="export HAR file"
          loading="lazy"
          width="100%"
        />
      </Box>
    </Box>
  );
};

export default Installation;
