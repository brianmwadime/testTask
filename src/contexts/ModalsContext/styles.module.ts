import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  () => ({
      modalWrap: {
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed',
          zIndex: 1200,
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
      }
  })
);

export default useStyles;
