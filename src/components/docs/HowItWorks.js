import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box
} from '@mui/material';

const steps = [
  {
    title: "1. Record",
    description:
      "Open your app in a real browser from the FtMocks UI. Every matching API call is captured as a structured mock file. You can record raw mocks only, or run Playwright codegen simultaneously to generate test code at the same time."
  },
  {
    title: "2. Generate",
    description:
      "FtMocks drops you into the Code tab with a ready-to-edit test file. Set PROJECT_TYPE to playwright, react, or angular and FtMocks generates the right format — a Playwright .spec.js, a Jest .test.js, or an Angular .spec.ts — already wired to the mocks you just recorded."
  },
  {
    title: "3. Run — no mock server required",
    description:
      "Click the play icon to run the test headless. The ftmocks-utils library intercepts network requests at test runtime and serves recorded responses inline. No mock server process, no extra infra in CI — mocks travel with the test as plain JSON files."
  },
  {
    title: "Re-record when APIs change",
    description:
      "When a backend API changes, re-record the affected test. Because mocks are plain JSON files, you can review the diff in your PR before merging. You can also edit individual mock payloads directly in the UI or with AI assistance for small changes."
  },
  {
    title: "Share defaults across tests",
    description:
      "Common API responses (auth, config, user profile) can be stored as default mocks at the project level. All tests fall back to default mocks for any request not covered by their own recorded data, so you don’t repeat yourself across test cases."
  }
];

export default function HowItWorks() {
  return (
    <Card sx={{ m: 3, mt: 5}}>
      <CardHeader title="How FtMocks Works" subheader="Record → Generate → Run. No mock server required." />
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          FtMocks turns real browser interactions into ready-to-run Playwright and React tests with mocks baked in. Here’s the full workflow:
        </Typography>
        <List>
          {steps.map((step, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={<Typography variant="h6">{step.title}</Typography>}
                  secondary={<Typography variant="body2" color="text.secondary">{step.description}</Typography>}
                />
              </ListItem>
              {index < steps.length - 1 && <Divider variant="middle" />}
            </Box>
          ))}
        </List>
        <Box>
          <img
            src="/static/HowFtMocksWorks.svg"
            alt="export HAR file"
            loading="lazy"
            width="100%"
          />
          </Box>
      </CardContent>
    </Card>
  );
}
