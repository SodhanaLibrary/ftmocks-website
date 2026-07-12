import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { commonCodeStye } from './utils';

const Row = ({ tool, route }) => (
  <Box sx={{ display: 'flex', gap: 2, mb: 0.5 }}>
    <Typography variant="body2" sx={{ fontFamily: 'monospace', minWidth: 260 }}>
      {tool}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
      {route}
    </Typography>
  </Box>
);

const McpToolsDoc = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Model Context Protocol (MCP)
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
        ftmocks-server ships an MCP server (<code>mcp/index.js</code>) that
        exposes a set of <code>ftmocks_</code>-prefixed tools mapped to the
        same HTTP API used by the UI. Any MCP-capable client (for example
        Cursor) can drive FtMocks programmatically while your FtMocks process
        is running. See the{' '}
        <Link
          href="https://github.com/SodhanaLibrary/ftmocks-server"
          target="_blank"
          rel="noopener"
        >
          ftmocks-server
        </Link>{' '}
        repository for the source.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Running it
      </Typography>
      <Typography variant="body1" gutterBottom>
        The FtMocks HTTP API must already be running (typically{' '}
        <code>npm start &lt;absolute path to ftmocks.env&gt;</code>) — the MCP
        server only forwards HTTP requests, it does not replace{' '}
        <code>server.js</code>. Start it from the repository root:
      </Typography>
      <Box component="pre" sx={commonCodeStye}>
        npm run mcp
      </Box>
      <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
        This starts a stdio MCP server. Example Cursor configuration:
      </Typography>
      <Box component="pre" sx={commonCodeStye}>
        {`{
  "mcpServers": {
    "ftmocks": {
      "command": "node",
      "args": ["/absolute/path/to/ftmocks-server/mcp/index.js"],
      "env": {
        "FTMOCKS_API_BASE_URL": "http://localhost:5000"
      }
    }
  }
}`}
      </Box>

      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Tools overview
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
        This is the full list registered in <code>mcp/tools.js</code> — there
        is no broader hidden set beyond what's below.
      </Typography>

      <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2 }}>
        Local setup (no running server required)
      </Typography>
      <Row tool="ftmocks_init" route="npx ftmocks init" />
      <Row tool="ftmocks_init_playwright" route="npx ftmocks init-playwright" />

      <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2 }}>
        Projects / environment
      </Typography>
      <Row tool="ftmocks_get_projects" route="GET /api/v1/projects" />
      <Row tool="ftmocks_create_project" route="POST /api/v1/projects" />
      <Row tool="ftmocks_switch_project" route="PUT /api/v1/projects" />

      <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2 }}>
        Tests and mocks
      </Typography>
      <Row tool="ftmocks_get_tests" route="GET /api/v1/tests" />
      <Row tool="ftmocks_create_test" route="POST /api/v1/tests" />
      <Row tool="ftmocks_update_test" route="PUT /api/v1/tests/:id" />
      <Row tool="ftmocks_delete_test" route="DELETE /api/v1/tests/:id" />
      <Row
        tool="ftmocks_get_mock_summary"
        route="GET /api/v1/tests/:id/mockSummary"
      />
      <Row
        tool="ftmocks_get_mock_data"
        route="GET /api/v1/tests/:id/mockdata/:mockId"
      />
      <Row
        tool="ftmocks_create_mock_data"
        route="POST /api/v1/tests/:id/mockdata"
      />
      <Row
        tool="ftmocks_upload_har_mockdata"
        route="POST /api/v1/tests/:id/harMockdata"
      />

      <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2 }}>
        Mock server
      </Typography>
      <Row tool="ftmocks_start_mock_server" route="POST /api/v1/mockServer" />
      <Row tool="ftmocks_stop_mock_server" route="DELETE /api/v1/mockServer" />

      <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2 }}>
        Playwright codegen
      </Typography>
      <Row
        tool="ftmocks_record_playwright"
        route="POST /api/v1/record/playwright"
      />
      <Row
        tool="ftmocks_record_playwright_mocks"
        route="POST /api/v1/record/playwright/mocks"
      />

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3, mb: 1 }}>
        Not exposed as MCP tools — use the REST API or the FtMocks UI directly
        for these instead:
      </Typography>
      <Box component="ul" sx={{ pl: 3, '& li': { mb: 0.5 } }}>
        <Typography component="li" variant="body2" color="text.secondary">
          Mock/test variants, reset, reorder tests, duplicate tests, move
          mocks to/from default mocks
        </Typography>
        <Typography component="li" variant="body2" color="text.secondary">
          Default mocks CRUD and Postman/Playwright-trace uploads
        </Typography>
        <Typography component="li" variant="body2" color="text.secondary">
          Recorded events (record/replay flow), screenshots, recorded logs
        </Typography>
        <Typography component="li" variant="body2" color="text.secondary">
          Code save/run, API specs CRUD, version comparison
        </Typography>
        <Typography component="li" variant="body2" color="text.secondary">
          Browser recording (<code>/api/v1/record/mocks</code>,{' '}
          <code>/api/v1/record/test</code>), AI-assisted mock editing
        </Typography>
      </Box>
    </Box>
  );
};

export default McpToolsDoc;
