import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    header: {
      background: '#020129',
      padding: '20px 0',
    },
    headerMobileWrap: {

      '@media (max-width: 1160px)': {
        background:'#020129',
        padding: '20px 10px',
        boxSizing: 'border-box',
      }
    },
    logo: {
      width: '132px',
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '@media (max-width: 1160px)': {
        display: 'none'
      }
    },
    sideBar: {

      '@media (max-width: 1160px)': {
        display: 'flex',
        flexDirection: 'column',
      }
    },
    buttonWrap: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px',

      '@media (max-width: 1160px)': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '212px',
        gap: '16px',
        marginTop: '40px',
      }
    },
    button: {
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      color: theme.palette.text.primary,
      fontWeight: 600,

      '&:hover': {
        opacity: '0.7',
      },

      '&:active': {
        opacity: '0.5',
      },
    },
    chainButton: {
      height: '39px',

      '@media (max-width: 1160px)': {
        width: '100%',
        backgroundColor: '#1D283A',
        display: 'flex',
        justifyContent: 'center',
        padding: '8px 15px 8px 15px',
        border: '1px solid #30648D',
        borderRadius: '24px',
        fontSize: '18px'
      }
    },
    myWallet: {
      width: '186px',
      height: '40px',

      '@media (max-width: 1160px)': {
        width: '100%',
      },

      '& button': {
        height: '40px',
        width: '186px',
      }
    },
    linkButton: {
      width: '100%',
    },
    connectWallet: {
      width: '186px',
      height: '40px',

      '@media (max-width: 1160px)': {
        width: '100%',
      },

      '& button': {
        height: '40px',
        width: '186px',
      }
    },
    menuBurger: {
      display: 'none',

      '& button': {
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        width: '40px',
        height: '40px'
      },

      '@media (max-width: 1160px)': {
        display: 'flex',
        justifyContent: 'end'
      }
    },
    closeIcon: {
      display: 'none',

      '& button': {
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        width: '40px',
        height: '40px'
      },

      '@media (max-width: 1160px)': {
        width: '100%',
        marginBottom: '16px',
        display: 'flex',
        justifyContent: 'end'
      }
    },
    headerMobile: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    wrapSideBar: {

      '& .MuiDrawer-paper': {
        background:'#020129',

        '@media (max-width: 1160px)': {
          padding: '24px 16px 0px 16px',
          width: '244px',
          boxSizing: 'border-box',
        }
      }
    },
    link: {
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      height: '48px',
      width: '140px',

      '& svg': {
        height: '48px',
        width: '140px'
      },
    },
  })
);


export default useStyles;
