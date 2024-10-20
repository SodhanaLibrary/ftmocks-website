import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const Feature = ({ imageSrc, title, description, index }) => (
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
        <Typography variant="h4" gutterBottom color="secondary">
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
      imageSrc: '/static/testing.png',
      title: 'Functional Testing',
      description: "Writing unit test cases for large frontend applications can be a daunting task for many frontend developers. In fact, it often feels like writing test cases takes more time and effort than developing the actual features. The question then arises: if functional tests can cover all the critical user flows and scenarios, why should developers invest time in writing unit tests? Wouldn't it make more sense to replace unit tests with comprehensive functional tests and move on?",
    },
    {
      imageSrc: '/static/mockData.png',
      title: 'Mock Data',
      description: "Creating and maintaining mock data for unit or functional tests can quickly become a nightmare. Imagine dealing with all the possible permutations and combinations of API responses for multiple test cases—each variation adding layers of complexity. Without an efficient system for managing this mock data, the entire process becomes overwhelming, turning what should be straightforward testing into a time-consuming and frustrating task. This is where FtMocks steps in. It offers a sophisticated and streamlined way to manage mock data, drastically reducing the chaos. With FtMocks, the burden of juggling endless test scenarios and mock responses is lifted, allowing you to focus on writing meaningful tests without drowning in data. It's a game-changer for anyone struggling to balance mock data and testing!",
    },
    {
      imageSrc: '/static/mockServer.png',
      title: 'Mock Server',
      description: "How do you handle developing a frontend application with mock data? Do you spin up a mock server, or do you just sprinkle mock data directly into the code? While embedding mock data directly into the code might seem quick and easy, it can lead to sneaky regressions if you forget to remove them before shipping. A much cleaner and safer solution would be to use FtMocks. With FtMocks, you can create specific test cases with their corresponding mock data and run a mock server tailored to each scenario. This not only keeps your production code clean but also ensures your tests are accurate and easily maintainable. Say goodbye to the hassle of hard-coded mock data and hello to a more efficient, risk-free development workflow!",
    },
    {
      imageSrc: '/static/codeCoverage.png',
      title: 'Code Coverage',
      description: 'Does your frontend application boast good code coverage? You might think unit tests are the only way to get there—but think again. You can achieve stellar code coverage without the hassle of writing countless unit tests. The secret? Functional tests combined with FtMocks for seamless mock data management. With FtMocks, you can easily create and maintain mock data for multiple test scenarios, paving the way for comprehensive functional tests. In fact, you can hit that elusive 100% code coverage by crafting functional tests that cover all the possible user flows and edge cases. No need to overload your code with unit tests—functional testing, powered by FtMocks, gets you to the finish line!',
    },
    // Add more features as needed
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
