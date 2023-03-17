import Copyright from '../Component/Copyright'
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
} from '@mui/material'
import * as React from 'react'
import Nav from '../Component/Nav'
import Table from './Components/Table'

const mdTheme = createTheme()
const View = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="xm" sx={{ mt: 4, mb: 4 }}>
            <Table />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default View
