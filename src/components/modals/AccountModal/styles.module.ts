import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    wrap: {

    },
    header: {
      marginBottom: '16px',
      fontWeight: 600,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      columnGap: '10px',
      justifyItems: 'stretch',
    },
    table: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '32px',
      maxHeight: '300px',
      overflowY: 'scroll',

      '&::-webkit-scrollbar': {
        width: '10px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#020129',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#4A8EF2',
        borderRadius: '4px',
      },
    },
  })
);

export default useStyles;
