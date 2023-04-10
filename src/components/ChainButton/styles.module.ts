import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    button: {
      background: theme.palette.primary.dark,
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 20px',
      display: 'flex',
      gap: '5px',
      alignItems: 'center',
      color: theme.palette.text.primary,
      fontWeight: 600,

      '&:hover': {
        opacity: '0.7'
      },

      '&:active': {
        opacity: '0.5',
      },
    },
    logo: {
      width: '20px',
    }
  })
);


export default useStyles;
