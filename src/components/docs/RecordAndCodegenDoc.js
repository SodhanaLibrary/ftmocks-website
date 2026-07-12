import React from 'react';
import { Box, Typography } from '@mui/material';

const RecordAndCodegenDoc = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Recording &amp; Codegen (Record tab)
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        Every test case has a <strong>Record</strong> tab that drives a real,
        headed browser to capture network traffic as mocks, generate a
        Playwright spec, or both at once.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Recording mock data
      </Typography>
      <Box component="ol" sx={{ pl: 3, mb: 3, '& li': { mb: 1 } }}>
        <Typography component="li" variant="body1">
          Select a test case, then open its <strong>Record</strong> tab.
        </Typography>
        <Typography component="li" variant="body1">
          Enter the <strong>URL</strong> to open and one or more{' '}
          <strong>Patterns</strong> (regexes matching the API calls you want
          captured as mocks). Leave <strong>Stop mock server</strong> /{' '}
          <strong>Record events</strong> checked unless you have a reason not
          to.
        </Typography>
        <Typography component="li" variant="body1">
          Click <strong>Record Mock Data</strong> — a headed browser opens.
          Use your app there to generate the traffic you want captured.
        </Typography>
        <Typography component="li" variant="body1">
          Click <strong>Stop recording</strong> when done. Captured requests
          appear as mocks under the <strong>Mocks</strong> tab.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom>
        Playwright codegen + mocks
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
        Instead of (or in addition to) recording raw mock data, you can
        generate a Playwright test at the same time:
      </Typography>
      <Box component="ol" sx={{ pl: 3, mb: 3, '& li': { mb: 1 } }}>
        <Typography component="li" variant="body1">
          Fill in <strong>URL</strong> / <strong>Patterns</strong> as above.
        </Typography>
        <Typography component="li" variant="body1">
          Click <strong>Playwright codegen + mocks</strong>. This opens
          Playwright's codegen/Inspector window against a real browser while
          recording matching network traffic as mocks for the test.
        </Typography>
        <Typography component="li" variant="body1">
          Interact with the app, then close the codegen browser/Inspector
          window when finished.
        </Typography>
        <Typography component="li" variant="body1">
          The panel switches to the <strong>Code</strong> tab and loads the
          generated <code>.spec.js</code> from disk; the mocks recorded during
          the session appear under the <strong>Mocks</strong> tab.
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        Use <strong>Run playwright codegen</strong> (in the Code tab) instead
        if you only want generated code without recording mocks.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Executing a test after recording
      </Typography>
      <Box component="ol" sx={{ pl: 3, mb: 2, '& li': { mb: 1 } }}>
        <Typography component="li" variant="body1">
          In the test's <strong>Record</strong> tab, open the{' '}
          <strong>Code</strong> tab (this happens automatically right after
          codegen finishes).
        </Typography>
        <Typography component="li" variant="body1">
          Edit the generated spec inline if needed.
        </Typography>
        <Typography component="li" variant="body1">
          Click the <strong>play icon</strong> ("Save and Run Test") to save
          the spec into the Playwright directory and run it headless, or the{' '}
          <strong>gavel icon</strong> ("Save and Run Test With Playwright UI")
          to run it with the Playwright UI. Output streams live into the
          panel below.
        </Typography>
        <Typography component="li" variant="body1">
          Use the <strong>save icon</strong> to persist the spec without
          running it, or the <strong>copy icon</strong> to copy the code to
          your clipboard.
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        Summary: capture on the Record tab (raw mocks, codegen, or both) →
        review/edit in the Code tab → run it from there with the play or
        gavel icon.
      </Typography>
    </Box>
  );
};

export default RecordAndCodegenDoc;
