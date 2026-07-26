import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const Feature = ({ imageSrc, title, description, index, testId }) => (
  <Container maxWidth="lg" sx={{ my: 8 }}>
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },  alignItems: 'center', gap: 4 }}>
      <Box sx={{ flex: 1, width: '100%' }}>
        <Box
          component="img"
          src={imageSrc}
          alt={title}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: 400,
            objectFit: 'cover',
            borderRadius: 2,
          }}
        />
      </Box>
      <Box sx={{ flex: 1, width: '100%' }}>
        <Typography data-testid={testId} variant="h4" gutterBottom color="secondary">
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </Box>
    </Box>
  </Container>
);

const Features = () => {
  const features = [
    {
      testId: 'heading-record-codegen',
      imageSrc: '/static/testing.png',
      title: 'Record & Generate Tests in One Step',
      description: "Open your app in a real browser, interact with it, and FtMocks simultaneously captures every API call as a mock and generates a Playwright spec from your actions. You get a ready-to-run test file and all its mock data in one shot — no hand-writing either.",
    },
    {
      testId: 'heading-no-mock-server',
      imageSrc: '/static/mockData.png',
      title: 'Playwright, React & Angular — One Tool',
      description: "Set PROJECT_TYPE to playwright, react, or angular and FtMocks generates the right test format from the same recording. Playwright specs, Jest + React Testing Library tests, and Angular spec files — all wired to recorded mocks, all runnable without a mock server in CI.",
    },
    {
      testId: 'heading-mock-server',
      imageSrc: '/static/mockServer.png',
      title: 'HAR, Postman & Trace Import',
      description: "Already have recordings? Import a HAR file, a Postman collection, or a Playwright trace and FtMocks converts them into structured mock data instantly. Re-record any time an API changes — updating your tests takes minutes, not hours.",
    },
    {
      testId: 'heading-code-coverage',
      imageSrc: '/static/codeCoverage.png',
      title: 'Hit 100% Coverage Without Unit Tests',
      description: 'Playwright functional tests powered by FtMocks can cover every user flow and edge case in your frontend. Because mocks are real recorded responses — not invented data — your tests reflect actual behavior. Comprehensive coverage without the overhead of maintaining a parallel suite of unit tests.',
    },
  ];

  return (
    <Box>
      {features.map((feature, index) => (
        <Feature key={index} {...feature} index={index} />
      ))}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
};

export default Features;
