import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    modalWrap: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      zIndex: 10000,
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    },
    modalBackdrop: {
      backgroundColor: '#00000088',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    },
    container: {
      boxSizing: 'border-box',
      width: '100%',
      margin: '0 auto',
      maxWidth: '400px',
    },
    modal: {
      borderRadius: '12px',
      position: 'relative',
    },
    card: {
      fontFamily: 'Figtree !important',
      background: theme.palette.background.paper,
      color: '',
      borderRadius: '24px',
    },
    content: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      padding: '24px',
    },
    title: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
      fontSize: 24,
      fontWeight: 600,
    },
    text: {
      fontSize: 18,
      lineHeight: '24px',
    },
    buttonWrap: {
      marginTop: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',

      '& button': {
        color: '#ffffff'
      }
    },
    button: {
      width: '100%',
      height: '56px',

      '& button': {
        width: '100%',
        height: '56px',
      },
    },
    warningWrap: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#F2B90A',
      marginTop: '24px',
      fontSize: 18,

      '& svg': {
        width: '20px',
        height: '20px',
        fill: '#F2B90A',

        '& path': {
          fill: '#F2B90A',
          stroke: '#F2B90A',
        }
      },
    },
  })
);

export default useStyles;
