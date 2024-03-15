import './App.css'

import {ThemeProvider, BaseStyles} from '@primer/react'
import {Button} from '@primer/react'

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Button>Click me</Button>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
