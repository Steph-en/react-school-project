import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import Login from "./pages/LoginPage";
import ResetPage from "./pages/ResetPage";
// import AboutPage from "../src/pages/AboutPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#013e87",
    },
    secondary: {
      main: "#2e74c9",
    },
    other: {
      main: "#F3F3F3",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: "700",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "600",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "600",
    },
  },
});

function App() {
  const [openReset, setReset] = useState(true);
  function toggleReset() {
    setReset(!openReset);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {openReset ? (
          <Login doSmth={toggleReset} />
        ) : (
          <ResetPage doSmth={toggleReset} />
        )}
        {/* <AboutPage /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
