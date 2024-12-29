
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Features from './Features';

const steps = [
  {
        label: 'Code Coverage',
        description: 'Achieving 100% code coverage for frontend projects is now easy.',
      },
      {
        label: 'Functional Testing',
        description: 'Why limit yourself to just unit tests when you can write functional tests just as easily?',
      },
      {
        label: 'Mock Server',
        description: `Running a mock server for your test cases is now simple.`,
      },
      {
        label: 'Mock Data',
        description: `It's easy to maintain mock data now.`,
      },
      
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    }, 4000); 

    return () => clearInterval(timer); 
  }, [maxSteps]);

  return (
    <Box>
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, pt: 15, pb: 10 }}>
        <iframe
          src={`https://www.youtube.com/embed/9dByVcyyRBA`}
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
      <Divider />
      <Features />
    </Container>
    </Box>
  );
}
