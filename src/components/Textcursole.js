
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Container from '@mui/material/Container';

const steps = [
  {
        label: 'FT mock',
        description: 'Achieving 100% code coverage for frontend projects is now easy.',
      },
      {
        label: 'products',
        description: 'Why limit yourself to just unit tests when you can write functional tests just as easily?',
      },
      {
        label: 'Docs',
        description: `Running a mock server for your test cases is now simple.`,
      },
      {
        label: 'Team',
        description: `It's also easier to maintain mock data.
        `,
      },
      
];

export default function AutoSlidingStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    }, 4000); 

    return () => clearInterval(timer); 
  }, [maxSteps]);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  // };

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, mt: 15 }}>
        <Container square elevation={3} sx={{ p: 2,display: 'flex'}}>
          <Typography sx={{textAlign: 'center', width: '100%'}} variant="h4">{steps[activeStep].label}</Typography>
        </Container>
        <Box sx={{ height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
          <Typography variant="h2" align="center">
            {steps[activeStep].description}
          </Typography>
        </Box>
        {/* <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        /> */}
      </Box>
    </Container>
  );
}
