import React, { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import Sidebar from "./Sidebar";
import contentData from "./utils"; // Content data for each section
import Installation from "./InstallationDoc";
import ReactExample from "./ReactExampleDoc";
import PlaywrightExample from "./PlaywrightExampleDoc";
import MockServerDoc from "./MockServerDoc";
import DefaultMockDataDoc from "./DefaultMockDataDoc";
import RecordHarDoc from "./RecordHarDoc";
import TestCasesDoc from "./TestCasesDoc";
import HowItWorks from "./HowItWorks";

function Docs() {
  const [section, setSection] = useState(0);

  const handleNavigation = (direction) => {
    const newIndex = section + direction;
    setSection(newIndex);
  };

  return (
    <Container>
      <Box sx={{ display: "flex", mt: 7 }}>
        <Sidebar setSection={setSection} section={section} />
        <Box sx={{ flexGrow: 1, p: 3, height: "100vh", overflowY: "scroll" }}>
          {section === 0 && <HowItWorks />}
          {section === 1 && <Installation />}
          {section === 2 && <DefaultMockDataDoc />}
          {section === 3 && <TestCasesDoc />}
          {section === 4 && <MockServerDoc />}
          {section === 5 && <PlaywrightExample />}
          {section === 6 && <ReactExample />}
          {section === 7 && <RecordHarDoc />}
          <Box display="flex" justifyContent="space-between">
            <Button
              data-testid="navigation-previous-btn"
              variant="contained"
              onClick={() => handleNavigation(-1)}
              disabled={section === 0}
            >
              Previous
            </Button>
            <Button
              data-testid="navigation-next-btn"
              variant="contained"
              onClick={() => handleNavigation(1)}
              disabled={section === contentData.length - 1}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Docs;
