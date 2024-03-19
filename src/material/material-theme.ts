import { createTheme } from '@mui/material'

const palette = {
  primary: {
    main: '#e91e63', // Pink 500
  },
  secondary: {
    main: '#f06292', // Pink 300
  },
  error: {
    main: '#f44336',
  },
  background: {
    default: '#fce4ec', // Light pink background
  },
} as const

export const theme = createTheme({
  palette: palette,
  components: {
    MuiTabs: {
      styleOverrides: {
        root: () => ({
          borderBottom: `1px solid ${palette.primary.main}`,
        }),
        indicator: () => ({
          height: '4px',
          borderRadius: '5px',
          backgroundColor: palette.primary.main,
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: () => ({
          textTransform: 'none',
          margin: '0 16px',
          minWidth: '0',
          padding: '6px 16px',
          '&:hover': {
            color: palette.secondary.main,
            opacity: 1,
          },
          '&.Mui-selected': {
            color: palette.primary.main,
            fontWeight: 'bold',
          },
          '&.Mui-focusVisible': {
            backgroundColor: palette.background.default,
          },
        }),
      },
    },
  },
})
