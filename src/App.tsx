import MaterialUnstyledTabs from './material/MaterialUnstyledTabs'
import MaterialStyledTabs from './material/MaterialStyledTabs'
import TabsWithCarbon from './carbon/TabsWithCarbon'
import TabsWithRadix from './radix/TabsWithRadix'
import { theme } from './material/material-theme'
import { ThemeProvider } from '@mui/material'

function App() {
  return (
    <>
      <TabsWithCarbon />
      {/* Material UI */}
      <ThemeProvider theme={theme}>
        <h2>Tabs with Material (styled w/a theme)</h2>
        <MaterialStyledTabs />
      </ThemeProvider>
      <h2>Tabs with Material</h2>
      <MaterialStyledTabs />
      <h2>Tabs with headless Material</h2>
      <MaterialUnstyledTabs />
      <TabsWithRadix />
    </>
  )
}

export default App
