import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '10px',
      justifyItems: 'stretch',
    },
  })
);