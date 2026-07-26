import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <ConstructionRoundedIcon />,
    title: 'One-step record + codegen',
    description:
      'A single click opens a real browser, records API traffic as mocks, and generates a Playwright spec — simultaneously.',
  },
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Zero CI infrastructure',
    description:
      'Mocks are plain JSON files that live next to your tests. No mock server process, no extra Docker container, no shared state.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Playwright, React & Angular',
    description:
      'Generate Playwright e2e tests, React component tests, or Angular spec files from the same recording — switch with a single PROJECT_TYPE setting.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Import from HAR, Postman & traces',
    description:
      'Bring in existing recordings from any source. FtMocks converts them into structured, reusable mock data instantly.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'AI-assisted mock editing',
    description:
      'Edit mock payloads with an LLM, or drive the entire record-generate-run workflow from Cursor or Claude via the built-in MCP server.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Version control friendly',
    description:
      'All mocks are plain JSON files that diff cleanly. Re-record when APIs change and review the diff before merging.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Everything you need to go from zero to a passing test suite — without
            writing mocks by hand or running extra infrastructure.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
