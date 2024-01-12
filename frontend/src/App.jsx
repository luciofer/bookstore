import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { SnackbarProvider } from 'notistack'


export function App() {

  return (
    <BrowserRouter>
      <SnackbarProvider>
        <Router />
      </SnackbarProvider>
    </BrowserRouter>
  )
}

