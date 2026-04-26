import React from "react";
import { Box, Typography } from "@mui/material";

const TestOptimizeTabDoc = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Optimize tab (under a test)
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        When you open a test case in FtMocks, use the Optimize tab to trim mock
        data, control how strictly the mock server matches requests, and read
        guidance for pushing default mocks into every test.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Deleting unused mock data
      </Typography>
      <Typography variant="body1" gutterBottom>
        Each mock can be marked as served after the mock server actually uses it
        to answer a request during a run. Mocks that were never served are
        treated as unused for this test.
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 3, "& li": { mb: 1 } }}>
        <Typography component="li" variant="body1">
          Run your test (or exercise the app) against the mock server so at
          least one mock is served. Until then, the optimizer shows a message
          that you need a run first—there is no served/unused signal yet.
        </Typography>
        <Typography component="li" variant="body1">
          After there are served mocks, the tab lists mocks with{" "}
          <code>served: false</code> as removable unused entries (method and
          URL).
        </Typography>
        <Typography component="li" variant="body1">
          Use the delete action to remove all listed unused mocks in one step.
          This keeps your test lean and avoids stale recordings that never
          matched real traffic.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom>
        Strict mode
      </Typography>
      <Typography variant="body1" gutterBottom>
        Strict mode is a per-test setting (checkbox on the Optimize tab). When
        enabled, the mock server relies on normal mock-to-request matching only.
        When disabled (moderate mode), if no mock matches exactly, the server can
        still pick the closest ranked match from the test mocks and default
        mocks so something is returned.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        Use strict mode when you want failures to surface missing or wrong mocks
        instead of a best-effort response. Use moderate mode when you prefer
        resilience and approximate matching during development.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Default Mock Management
      </Typography>
      <Typography variant="body1" gutterBottom>
        The Optimize tab includes a Default Mock Management section that
        explains copying shared default mocks into every individual test.
        Default mocks live under the Default Mock Data area; copying them
        duplicates the mock list entries and mock JSON files into each test
        folder so every test starts with the same baseline API set.
      </Typography>
      <Typography variant="body1" gutterBottom>
        To run that operation, open Default Mock Data in the app and use the
        optimizer action there (Move default mocks to tests). The Test Optimize
        tab is where you read what the feature does; the Default Mock Data
        screen is where you trigger it.
      </Typography>
    </Box>
  );
};

export default TestOptimizeTabDoc;
