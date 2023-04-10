import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    container: {
      boxSizing: 'border-box',
      width: '100%',
      margin: '0 auto',
      maxWidth: '800px',
    },
    modal: {
      borderRadius: '12px',
      position: 'relative',
    },
    card: {
      fontFamily: 'Figtree !important',
      background: '#020129',
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
    },
    button: {
      position: 'absolute',
      right: '24px',
      background: 'transparent',
      cursor: 'pointer',
      border: 'none',
    },
    titleText: {
      fontSize: 24,
      fontWeight: 600,
    }
  })
);


export default useStyles;

