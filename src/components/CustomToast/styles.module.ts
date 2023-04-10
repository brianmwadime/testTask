import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    popup: {
      zIndex: 10000000,
      border: '1px solid #3FA9F5',
      backgroundColor: '#020129',
      position: 'relative',
      padding: '20px',
      borderRadius: '10px',
      overflow: 'hidden',
      marginBottom: '10px',
      minWidth: '290px',
      '@media (max-width: 768px)': { minWidth: '290px' }
    },
  })
);

export default useStyles;
