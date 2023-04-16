import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    button: {
      border: 'none',
      textDecoration: 'none',
      cursor: 'pointer',
      fontWeight: 600,
      borderRadius: '10px',
    },
    large: {
      padding: '10px 24px',
      fontSize: '18px',
    },
    medium: {
      padding: '8px 20px',
      fontSize: '16px',
    },
    small: {
      padding: '6px 16px',
      fontSize: '14px',
    },
    primary: {
      background: theme.palette.background.default,
      color: '#ffffff',
      fontWeight: 400,
      fontSize: 18,

      '&:hover': {
        background: 'rgba(78, 168, 222, 0.7)',
      },

      '&:disabled': {
        pointerEvents: 'none',
        opacity: '0.35',
      },

      '&:active': {
        opacity: '0.7',
      },
    },
    secondary: {
      background: '#4A8EF2',
      borderRadius: '10px',
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 700,
      height: '40px',

      '&:hover': {
        background: 'linear-gradient(180deg, #1E6DE0 -22.5%, #B02F96 100%)',
      },

      '&:disabled': {
        pointerEvents: 'none',
        background: 'rgba(30, 109, 224, 0.4)',
      },

      '&:active': {
        opacity: '0.4',
      },
    },
    edit: {
      background: '#4EA8DE',
      borderRadius: '8px',
      color: '#FFFFFF',
      fontSize: '14px',
      fontWeight: 400,
      padding: '4px 8px',

      '&:hover': {
        background: '#5AC1FF',
      },

      '&:disabled': {
        pointerEvents: 'none',
        opacity: '0.4',
      },

      '&:active': {
        background: '#009FFF',
      },
    },
    editWithIcon: {
      background: 'transparent',
      color: '#ffffff',
      fontSize: 14,
      border: '1px solid #4EA8DE',
      borderRadius: '8px',
      fontWeight: 400,
      padding: '8px',

      '&:hover': {
        background: '#30648D',
      },

      '&:active': {
        background: '#4EA8DE',
      },

      '&:disabled': {
        pointerEvents: 'none',
        opacity: '0.4',
      },
    },
    secondary2: {
      background: '#FF965F',
      color: '#FFFFFF',
      borderRadius: '10px',
      height: '60px',

      '&:hover': {
        background: 'linear-gradient(180deg, #FF7932 0%, #B02F96 100%)',
      },

      '&:disabled': {
        pointerEvents: 'none',
        opacity: '0.35',
      },

      '&:active': {
        opacity: '0.7',
      },
    },
    secondary3: {
      background: '#020129',
      border: '1px solid #30648D',
      borderRadius: '8px',
      padding: '16px 0px',
      fontSize: 18,
      color: theme.palette.text.primary,

      '&:hover': {
        background: '#30648D',
        border: '1px solid #4EA8DE',
        borderRadius: '8px',
      },
      '&:active': {
        background: '#4EA8DE',
        border: '1px solid #30648D',
        borderRadius: '8px',
      },
      '&:disabled': {
        pointerEvents: 'none',
        opacity: '0.35',
      },
    },
    createVault: {
      background: '#1D283A',
      border: '1px solid #30648D',
      borderRadius: '24px',
      fontWeight: 600,
      fontSize: 18,
      color: theme.palette.text.primary,
      padding: '8px 29px',

      '&:hover': {
        background: '#30648D',
        border: '1px solid #30648D',
        borderRadius: '24px',
      },
      '&:active': {
        background: '#4EA8DE',
        border: '1px solid #30648D',
        borderRadius: '24px',
      },
      '&:disabled': {
        color: 'rgba(255, 255, 255, 0.4)'
      },
    },
    default: {
      background: 'transparent',
      color: '#30648D',
      fontSize: 18,

      '&:hover': {
        color: '#5AC1FF',
      },

      '&:disabled': {
        color: '#A3A1A1'
      },
    },
    approval: {
      color: '#191919',
      background: '#E0AA3A',

      '&:hover': {
        background: 'rgba(224, 170, 58, 0.85)',
      },

      '&:disabled': {
        pointerEvents: 'none',
        opacity: '0.35',
      },

      '&:active': {
        opacity: '0.7',
      },
    },
    loader: {
      marginRight: '11px',
      width: '19px !important',
      height: '19px !important',
    },
    text: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loaderWrap: {
      background: '#2E2E2E',
      color: 'rgba(255, 255, 255, 0.5)',

      '&:disabled': {
        pointerEvents: 'none',
        opacity: '1',
      },

      '&:hover': {
        background: '#2E2E2E',
        color: 'rgba(255, 255, 255, 0.5)',
      },
    },
    error: {
      background: 'transparent',
      color: '#E03838',
      border: '1px solid #E03838',

      '&:disabled': {
        pointerEvents: 'none',
        opacity: '1',
      },

      '&:hover': {
        background: 'transparent',
        color: '#E03838',
        border: '1px solid #E03838',
      },

    },
    fullWidth: {
      width: '100%'
    }
  })
);



export default useStyles;
