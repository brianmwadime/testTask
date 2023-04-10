import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  () => ({
    wrapper: {
      maxHeight: 'calc(100vh - 200px)',
      padding: '0 10px'
    },
    text: {
      fontSize: 18,
      marginTop: '32px',
      marginBottom: '20px',

      '& span': {
        fontWeight: 700,
      }
    },
    wrap: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '24px',
      rowGap: '24px',

      '@media (max-width: 1160px)': {
        display: 'flex',
        flexDirection: 'column',
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
    buttonContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',

      '& img': {
        width: '30px',
      }
    },
  })
);


export default useStyles;
