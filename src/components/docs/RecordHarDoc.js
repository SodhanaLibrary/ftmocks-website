import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, Box, ListItem, ListItemText, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HarInfoComponent = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Understanding HAR Files
      </Typography>

      {/* Overview */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">What is a HAR File?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A HAR (HTTP Archive) file is a format used to log interactions between a web browser and a site. It records details about network requests and responses, including metadata like headers, content, and loading times.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Uses of HAR Files */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Uses of HAR Files</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary="Performance Analysis" secondary="Identify bottlenecks by analyzing loading times for assets like images, scripts, or CSS." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Error Debugging" secondary="Inspect HTTP status codes to spot failed requests or server issues." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Data Monitoring" secondary="Capture API responses and data flows to verify data exchanges and security." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Network Optimization" secondary="Optimize delivery and caching strategies by understanding request sequence and duration." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Generating a HAR File */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">How to Generate a HAR File</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Most modern browsers provide options for generating HAR files. You can usually find it under the "Network" tab in Developer Tools. Start the recording, interact with the site, then export the data as a HAR file.
          </Typography>
          <Box sx={{p: 2}}>
          <img
            src="/static/record_har_file.png"
            alt="export HAR file"
            loading="lazy"
            width="100%"
          />
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Structure of a HAR File */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Structure of a HAR File</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A HAR file is a JSON file with several sections:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="log" secondary="The main container for all HAR file data." />
            </ListItem>
            <ListItem>
              <ListItemText primary="entries" secondary="Each HTTP request and response." />
            </ListItem>
            <ListItem>
              <ListItemText primary="pages" secondary="High-level data for each page load, including total load time." />
            </ListItem>
            <ListItem>
              <ListItemText primary="request & response" secondary="Details for each HTTP request and response, such as headers, timings, and payloads." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default HarInfoComponent;
