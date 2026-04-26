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
        FtMocks loads a project environment file (for example{" "}
        <code>my-project.env</code> or a path passed with{" "}
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
        uploads, <code>vault.json</code> (secrets), and recorded logs. Required
        for normal operation.
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

      <Var name="PLAYWRIGHT_DIR">
        Path to your Playwright project (often relative to{" "}
        <code>MOCK_DIR</code>). Used when generating or resolving Playwright
        code and for paths exposed to the UI (e.g. relative paths from the
        Playwright directory).
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

      <Var name="CRYPTO_SALT">
        Optional salt string for encrypting values in <code>vault.json</code>.
        If unset, the server uses a built-in static salt (less ideal for
        production secrets).
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
        When running <code>mcp-server.js</code>, if <code>MOCK_DIR</code> is
        not already set, the process may look for a project env file under{" "}
        <code>FTMOCKS_WORKSPACE</code> or <code>WORKSPACE_ROOT</code> to locate
        your workspace before applying defaults.
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
        Example project env
      </Typography>
      <Box component="pre" sx={commonCodeStye}>
        {`MOCK_DIR=./example/my-project/testMockData
PORT=5000
PREFERRED_SERVER_PORTS=[4051]
PLAYWRIGHT_DIR=../playwright/
FALLBACK_DIR=../build`}
      </Box>
    </Box>
  );
};

export default EnvironmentVariablesDoc;
