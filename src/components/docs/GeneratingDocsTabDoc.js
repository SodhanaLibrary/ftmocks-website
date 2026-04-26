import React from "react";
import { Box, Typography } from "@mui/material";

const GeneratingDocsTabDoc = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Documentation tab (generating docs)
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        Beside the Optimize tab, the Documentation tab turns recorded UI events
        into a screenshot-based walkthrough. You record the flow first, replay it
        once to capture screens, then use those images for documentation and
        visual review.
      </Typography>

      <Typography variant="h5" gutterBottom>
        1. Record the test and events
      </Typography>
      <Typography variant="body1" gutterBottom>
        Open the Record tab for your test case and capture the scenario: navigation,
        clicks, inputs, and other steps are stored as recorded events for that
        test. The Events Data panel lists what will be replayed. You need a
        non-empty event list before you can generate screenshots.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        Mocks can be used as usual so the replay hits stable responses while you
        focus on the UI sequence.
      </Typography>

      <Typography variant="h5" gutterBottom>
        2. Run events to generate screenshots
      </Typography>
      <Typography variant="body1" gutterBottom>
        In Events Data, open the mock-mode menu (record icon) and choose Run for
        screenshots. FtMocks runs generated Playwright
        code that calls <code>runEventsForScreenshots</code> (from{" "}
        <code>ftmocks-utils</code>) so each step can produce a stored screenshot
        and metadata (including the highlighted region for the next action).
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        When the run finishes, recorded events include{" "}
        <code>screenshotInfo</code> where captures succeeded. If the
        Documentation tab still says there are no screenshots, confirm the
        screenshot run completed without errors and that events were saved for
        this test.
      </Typography>

      <Typography variant="h5" gutterBottom>
        3. Use the Documentation tab
      </Typography>
      <Typography variant="body1" gutterBottom>
        The Documentation tab loads recorded events that have{" "}
        <code>screenshotInfo</code> and offers three views:
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 2, "& li": { mb: 1 } }}>
        <Typography component="li" variant="body1">
          Test Walkthrough (list): every step with its description and full-page
          image; the target control is outlined so readers see what to do next.
        </Typography>
        <Typography component="li" variant="body1">
          Test Training: one step at a time; use Previous / Next or click the
          highlighted region to advance—good for guided onboarding or demos.
        </Typography>
        <Typography component="li" variant="body1">
          Test Differentiate: when a diff image is available (
          <code>diffPath</code>), side-by-side baseline and comparison shots
          support visual change review (documentation of what changed or
          lightweight visual testing).
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
        Event descriptions shown in the UI come from your recorded events, so
        edit or add clear text when recording if you want polished doc steps.
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Summary: record on the Record tab → Run for screenshots from Events Data
        → open the Documentation tab for walkthroughs, training, and visual
        diffs.
      </Typography>
    </Box>
  );
};

export default GeneratingDocsTabDoc;
