import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from "./components/Topbar/Topbar"
import Sidebar from "./components/Sidebar/Sidebar"
import { ColorModeContext, useMode } from './theme';
import { Outlet } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
