import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    container: {
      maxWidth: '1250px',
      margin: '0 auto',

      '@media (max-width: 1160px)': {
        maxWidth: 'inherit',
        padding: '50px 10px',
      }
    },
    mainBg: {
      background: '#020129',
      position: 'relative',

    },
    secondaryBg: {
      background: 'transparent',
    },
    fullScreen: {
      minHeight: 'calc(100vh - 90px)'
    }
  })
);

export default useStyles;
