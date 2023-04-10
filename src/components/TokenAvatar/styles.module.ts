import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    avatar: {
      width: '30px !important',
      height: '30px !important',
      border: '1px solid #ffffff !important',

      '@media (max-width: 1160px)': {
        width: '26px !important',
        height: '26px !important',
      }
    },
  })
);

export default useStyles;
