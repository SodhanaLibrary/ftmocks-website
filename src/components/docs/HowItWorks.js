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
    title: "Capture All the Data",
    description:
      "The user captures an entire network trace of the application, generating a HAR file filled with detailed network calls. They then upload this file to FtMocks, which uses it to create a robust set of default mock data covering a vast array of requests and responses."
  },
  {
    title: "Design Tailored Test Cases",
    description:
      "With this foundation, the user can now design specific test cases, each with their own dedicated mock data, tailored to unique scenarios and edge cases."
  },
  {
    title: "Run Mock Servers with Ease",
    description:
      "The user selects a test case and spins up the mock server. This server will seamlessly handle incoming requests as if it were the live backend."
  },
  {
    title: "Respond from Test-Specific Mock Data First",
    description:
      "When a request hits the mock server, it first checks the test-specific mock data for a match. If found, it serves the tailored response, making tests highly accurate and relevant."
  },
  {
    title: "Fallback to Default Data",
    description:
      "If the required mock data isn’t present in the test case's set, the mock server smartly falls back to the default mock data, ensuring every request gets a response. This makes the process resilient and minimizes gaps in test coverage."
  }
];

export default function HowItWorks() {
  return (
    <Card sx={{ m: 3, mt: 5}}>
      <CardHeader title="FtMocks Workflow" subheader="An overview of the process" />
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Here’s how FtMocks enables you to effortlessly generate and manage mock data for application testing:
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
