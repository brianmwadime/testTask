import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    connectButton: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      color: theme.palette.text.primary,

      '& img': {
        width: '40px',
        height: '40px',
        marginRight: '1rem',
      }
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    container: {
      maxWidth: '400px',
    },
  })
);

export default useStyles;
