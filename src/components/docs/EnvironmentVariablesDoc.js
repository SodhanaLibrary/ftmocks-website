import React from "react";
import { Box, Typography } from "@mui/material";
import { commonCodeStye } from "./utils";

const Var = ({ name, children }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600 }}>
      {name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {children}
    </Typography>
  </Box>
);

const EnvironmentVariablesDoc = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Environment variables (ftmocks-server)
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        FtMocks loads a project environment file (typically{" "}
        <code>ftmocks.env</code>, or a path passed with{" "}
        <code>--envfile=</code>) when you start the server. Paths such as{" "}
        <code>MOCK_DIR</code> that are not absolute are resolved relative to the
        directory containing that file. A separate <code>.env</code> in the
        ftmocks-server repo root is used only for server-wide keys such as the
        OpenAI API key.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Project env file
      </Typography>

      <Var name="MOCK_DIR">
        Absolute or relative path to the mock data root. Holds{" "}
        <code>tests.json</code>, per-test folders (<code>test_*</code>),{" "}
        <code>defaultMocks</code>, <code>mockServer.config.json</code>, API spec
        uploads, and recorded logs. Required for normal operation.
      </Var>

      <Var name="PORT">
        HTTP port for the main FtMocks API and UI. Defaults to{" "}
        <code>5000</code> if unset.
      </Var>

      <Var name="PREFERRED_SERVER_PORTS">
        JSON array of port numbers (string), for example{" "}
        <code>[4051]</code> or <code>[5001, 5002]</code>. The embedded mock
        server uses the first entry when FtMocks spawns it.
      </Var>

      <Var name="PROJECT_TYPE">
        Selects the kind of tests this project generates and runs:{" "}
        <code>playwright</code> (the default when unset) or <code>react</code>.
        For <code>react</code>, the <strong>Record</strong> section swaps the
        Playwright codegen actions for <strong>Generate React Code</strong>{" "}
        (Jest + React Testing Library), saves tests as{" "}
        <code>&lt;test-name&gt;.test.js</code>, and runs them with{" "}
        <code>REACT_TEST_COMMAND</code>. For <code>playwright</code> it keeps the
        Playwright codegen flow, saving <code>&lt;test-name&gt;.spec.js</code>{" "}
        under <code>PLAYWRIGHT_DIR/tests</code>. You can set it from the{" "}
        <strong>Projects</strong> page (Edit env file) or by hand.
      </Var>

      <Var name="PLAYWRIGHT_DIR">
        Path to your Playwright project (often relative to{" "}
        <code>MOCK_DIR</code>). Used when generating or resolving Playwright
        code and for paths exposed to the UI (e.g. relative paths from the
        Playwright directory). Applies when <code>PROJECT_TYPE</code> is{" "}
        <code>playwright</code>.
      </Var>

      <Var name="REACT_TESTS_DIR">
        React projects only (<code>PROJECT_TYPE=react</code>). Directory where
        generated <code>*.test.js</code> files are saved and read back (for
        example <code>../src/tests</code>). Relative paths resolve from{" "}
        <code>MOCK_DIR</code>. This is the React analogue of{" "}
        <code>PLAYWRIGHT_DIR</code>.
      </Var>

      <Var name="REACT_TEST_COMMAND">
        React projects only. Command used to run a single React test. Defaults
        to <code>npx jest</code>. The test file path is appended to the command,
        and it runs from the nearest <code>package.json</code> directory with{" "}
        <code>NODE_ENV=test</code>. Set it per project, for example{" "}
        <code>npx react-scripts test --watchAll=false</code> (Create React App)
        or <code>npx vitest run</code> (Vitest).
      </Var>

      <Var name="FALLBACK_DIR">
        Directory used as a fallback context (for example your app{" "}
        <code>build</code> or dist folder), resolved like other paths relative
        to <code>MOCK_DIR</code> when not absolute. Surfaced in the environment
        API for tooling and Playwright setups.
      </Var>

      <Var name="BASE_URL">
        Base URL used when recording traffic (for example HAR / browser
        recording) so requests are issued against the correct origin.
      </Var>

      <Var name="HTTP_CREDENTIALS_USERNAME / HTTP_CREDENTIALS_PASSWORD">
        Optional HTTP basic auth credentials applied when recording against a
        protected <code>BASE_URL</code>.
      </Var>

      <Var name="EXCLUDED_HEADERS">
        Comma-separated list of header names (case-insensitive) stripped or
        ignored when comparing or exporting mocks. If omitted, the server
        defaults to{" "}
        <code>
          cookie,set-cookie,authorization,www-authenticate
        </code>
        .
      </Var>

      <Var name="MATCH_HEADERS">
        Optional comma-separated header names. When set, an incoming request
        only matches a mock if each listed header&apos;s value equals the value
        stored on the mock (names matched case-insensitively). If unset, header
        values are not used for this extra matching step.
      </Var>

      <Var name="DEFAULT_IGNORE_PARAMS">
        Optional comma-separated query parameter names to ignore when recording
        or normalizing URLs (for example volatile tracking params).
      </Var>

      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        FtMocks repo <code>.env</code>
      </Typography>

      <Var name="OPENAI_API_KEY">
        Loaded from the ftmocks-server root <code>.env</code> (not the project
        env file). Required for AI-assisted mock editing and related routes.
      </Var>

      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Process / CLI
      </Typography>

      <Var name="NODE_ENV">
        Standard Node flag. When set to <code>development</code>, logging is more
        verbose (same effect as debug mode for the logger).
      </Var>

      <Var name="debug">
        Set internally to a truthy value when you start the server with the{" "}
        <code>--debug</code> CLI flag; enables verbose debug logging.
      </Var>

      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        MCP server only
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        The MCP server (<code>mcp/index.js</code>, started with{" "}
        <code>npm run mcp</code>) only forwards HTTP requests to a running
        ftmocks-server API — it does not read <code>MOCK_DIR</code> itself.
        It resolves the API base URL in this order:{" "}
        <code>FTMOCKS_API_BASE_URL</code>, then <code>FTMOCKS_SERVER_URL</code>
        , then <code>http://localhost:$&#123;PORT&#125;</code> (or port{" "}
        <code>5000</code> if <code>PORT</code> is unset). Set{" "}
        <code>FTMOCKS_API_BASE_URL</code> in your MCP client config to match
        the host and port where FtMocks is actually listening.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Internal (runtime)
      </Typography>

      <Typography variant="body2" color="text.secondary">
        <code>recordTest</code> and <code>recordMocks</code> are set on{" "}
        <code>process.env</code> while a recording session is active; you do not
        configure these in <code>.env</code> files.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Example project env (Playwright)
      </Typography>
      <Box component="pre" sx={commonCodeStye}>
        {`MOCK_DIR=./example/my-project/testMockData
PORT=5000
PREFERRED_SERVER_PORTS=[4051]
PROJECT_TYPE=playwright
PLAYWRIGHT_DIR=../playwright/
FALLBACK_DIR=../build`}
      </Box>

      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Example project env (React)
      </Typography>
      <Box component="pre" sx={commonCodeStye}>
        {`MOCK_DIR=./testMockData
PORT=5000
PROJECT_TYPE=react
REACT_TESTS_DIR=../src/tests`}
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Generated React tests import their runtime from{" "}
        <code>ftmocks-utils</code> (<code>initiateJestFetch</code>,{" "}
        <code>getByXPath</code>), so the target project needs{" "}
        <code>ftmocks-utils</code> (&ge; 1.7.0), <code>jest</code>, and{" "}
        <code>@testing-library/react</code> installed.
      </Typography>
    </Box>
  );
};

export default EnvironmentVariablesDoc;
